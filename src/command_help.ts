import type {CLICommand} from "./commands.js"
import {getCommands} from "./commands.js"
export function commandHelp(commands: Record<string, CLICommand>){
    console.log(`Welcome to the Pokedex!
Usage:`);

    const values = getCommands();
    for (let command in values){
        console.log(`${values[command].name}: ${values[command].description}`);
    }
}