import {cleanInput} from "./repl.js";
import {describe, expect, test} from "vitest";

describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "Four Score and Seven Years ago",
        expected: ["four", "score", "and", "seven", "years", "ago"],
    },
    {
        input: "tHiS iS tHe StOrY oF a GiRl",
        expected: ["this", "is", "the", "story", "of", "a", "girl"],
    },
    {
        input: "Charmander Bulbasaur PIKACHU",
        expected: ["charmander","bulbasaur","pikachu"],
    },

])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        let actual: string[] = cleanInput(input);
        // The `expect` and `toHaveLength` functions are from vitest
        // they will fail the test if the condition is not met
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            // likewise, the `toBe` function will fail the test if the values are not equal
            expect(actual[i]).toBe(expected[i]);
        }
    });
});