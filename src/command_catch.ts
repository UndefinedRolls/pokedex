import type {CLICommand, State} from "./state.js"
import {getCommands} from "./commands.js"

export async function commandCatch(state: State, monster_name: string) {
    console.log(`Throwing a Pokeball at ${monster_name}...`);
    const Pokemon = await state.api.catchPokemon(monster_name);
    const catch_chance = Math.random();
    const experience = 1/(1+Pokemon.base_experience/100);
    if (catch_chance < experience) {
        console.log(`${monster_name} was caught!`)
        state.pokedex[monster_name] = Pokemon;
    }
    else{
        console.log(`${monster_name} escaped!`)
    }
}