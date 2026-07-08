import {commandExit} from "./command_exit.js"
import {commandHelp} from "./command_help.js"
import {commandMap, commandMapb} from "./command_map.js"
import {commandExplore} from "./command_explore.js"
import {commandCatch} from "./command_catch.js"
import {commandInspect} from "./command_inspect.js"
import {commandPokedex} from "./command_pokedex.js"
import type {CLICommand} from "./state.js"
export function getCommands(): Record<string, CLICommand>{
    return {
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp
        },
        map: {
            name: "map",
            description: "Displays the next 20 locations",
            callback: commandMap
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous 20 locations",
            callback: commandMapb
        },
        explore: {
          name: "explore",
          description: "Given a location name, displays all pokemon in that location",
            callback: commandExplore
        },
        catch: {
            name: "catch",
            description: "Catch a pokemon...or at least try to!",
            callback: commandCatch
        },
        inspect: {
            name: "inspect",
            description: "Get details about a pokemon you've caught",
            callback: commandInspect
        },
        pokedex: {
            name: "pokedex",
            description: "See the pokemon you've caught!",
            callback: commandPokedex
        }
    }
}

