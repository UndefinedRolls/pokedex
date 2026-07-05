import {createInterface, type Interface} from "readline";
import {getCommands} from "./commands.js";
import {PokeAPI} from "./pokeapi.js";
export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    user_interface: Interface;
    command_registry: Record<string, CLICommand>;
    api: PokeAPI;
    nextLocationsURL: string;
    prevLocationsURL: string;
}

export function initState(){
    var rl = createInterface(
        {
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > "
        },
    );
    var poke_api = new PokeAPI();
    const avail_commands = getCommands()
    var current_state = {
        user_interface: rl,
        command_registry: avail_commands,
        api: poke_api,
        nextLocationsURL: null,
        prevLocationsURL: null,
    };
    return current_state;
}