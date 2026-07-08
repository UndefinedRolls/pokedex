import type {CLICommand, State} from "./state.js"
import {getCommands} from "./commands.js"

export async function commandPokedex(state: State) {
    console.log("Your Pokedex:");
    for (const name in state.pokedex) {
        console.log(`- ${name}`);
    }
}