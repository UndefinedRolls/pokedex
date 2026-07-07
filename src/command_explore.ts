import type {CLICommand, State} from "./state.js"
import {getCommands} from "./commands.js"

export async function commandExplore(state: State, loc_name: string) {

    const Pokemon_List = await state.api.fetchLocation(loc_name);
    for (let num_monster= 0; num_monster < Pokemon_List.pokemon_encounters.length; num_monster++) {
        console.log(Pokemon_List.pokemon_encounters[num_monster].pokemon.name);
    }
}