import * as readline from "node:readline";
import {getCommands} from "./commands.js"
import type {State} from "./state.js"
export function cleanInput(user_str: string): string[]
{
    return user_str.trim().toLowerCase().split(" ").filter(function (e){return e;})
}

export function startREPL(state:State) {

    state.user_interface.prompt();

    state.user_interface.on('line', (line: string) =>
        {
            const request = cleanInput(line);
            if (request.length === 0) {
                state.user_interface.prompt();
                return;
            }
            const command = request[0];

            const cmd = state.command_registry[command];
            if (!cmd){
                console.log("Unknown command");
                state.user_interface.prompt();
                return;
            }
            cmd.callback(state);
            state.user_interface.prompt();
        }
    )
}
