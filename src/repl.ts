import * as readline from "node:readline";
import {getCommands} from "./commands.js"
export function cleanInput(user_str: string): string[]
{
    return user_str.trim().toLowerCase().split(" ").filter(function (e){return e;})
}

export function startREPL() {

    var rl = readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout
        }
    );
    rl.setPrompt("Pokedex >");
    rl.prompt();

    rl.on('line', (line: string) =>
        {
            const request = cleanInput(line);
            if (request.length === 0) {
                rl.prompt();
                return;
            }
            const command = request[0];
            const avail_commands = getCommands();
            const cmd = avail_commands[command];
            if (!cmd){
                console.log("Unknown command");
                rl.prompt();
                return;
            }
            cmd.callback(avail_commands);
            rl.prompt();
        }
    )
}
