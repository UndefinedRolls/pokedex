import type {CLICommand, State} from "./state.js";

export async function commandExit(state: State)
{
    console.log("Closing the Pokedex... Goodbye!")
    state.user_interface.close()
    process.exit(0);
}