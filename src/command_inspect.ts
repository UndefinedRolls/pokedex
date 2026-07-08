import type {CLICommand, State} from "./state.js"
import {getCommands} from "./commands.js"

export async function commandInspect(state: State, monster_name: string) {
    if (!monster_name) {
        console.error("hey, where's the Pokemon?");
    }
    if (!state.pokedex[monster_name]) {
        console.log
        console.error(`you have not caught a/n ${monster_name}`)
    }

        const pokemon = state.pokedex[monster_name];
        console.log(`Name: ${pokemon.name}`);
        console.log(`Height: ${pokemon.height}`);
        console.log(`Weight: ${pokemon.weight}`);
        console.log("Stats:")
        for (let s = 0; s < pokemon.stats.length; s++){
            console.log(`- ${pokemon.stats[s].stat.name}: ${pokemon.stats[s].base_stat}`)
        }
        console.log("Types:")
        for (let t = 0; t < pokemon.types.length; t++){
            console.log(`- ${pokemon.types[t].type.name}`)
        }

}