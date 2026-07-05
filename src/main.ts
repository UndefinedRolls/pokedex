
import {startREPL} from "./repl.js"
import {initState} from "./state.js"
async function main() {
    const projState = initState();
    try {
        await startREPL(projState);
    } catch (error) {
        console.error(error)
    }
}

main();

