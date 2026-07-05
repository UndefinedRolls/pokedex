import type {CLICommand, State} from "./state.js"
import {getCommands} from "./commands.js"
export async function commandHelp(state: State){
    console.log(`Welcome to the Pokedex!
Usage:`);

    const values = state.command_registry;
    for (let command in values){
        console.log(`${values[command].name}: ${values[command].description}`);
    }
}