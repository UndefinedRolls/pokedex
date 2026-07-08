import { PokeAPI } from "./pokeapi.js";
import { describe, it, expect, vi, beforeEach, afterEach} from "vitest";
import type {State} from "./state.js";
import type {Pokemon} from "./pokeapi.js"
import {commandInspect} from "./command_inspect.js"
describe("pokeAPI.fetchLocation", () => {
    it("fetches canalave-city-area", async () => {
        const api = new PokeAPI();
        const location = await api.fetchLocation("canalave-city-area");

        expect(location.pokemon_encounters[0].pokemon.name).toBe("tentacool");
    })})

describe("pokeAPI.fetchLocation", () => {
    it("fetches eterna-city-area", async () => {
        const api = new PokeAPI();
        const location = await api.fetchLocation("eterna-city-area");

        expect(location.pokemon_encounters[0].pokemon.name).toBe("psyduck");
    })})
