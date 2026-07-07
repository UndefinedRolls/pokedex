import { PokeAPI } from "./pokeapi.js";
import { describe, it, expect} from "vitest";

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
