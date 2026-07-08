import { Cache, CacheEntry } from "./pokecache.js"
export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    #pokeCache: Cache
    constructor(interval: number = 1000 * 60 * 5) {
        this.#pokeCache = new Cache(interval)
    }

    async fetchLocations(pageURL: string | null): Promise<ShallowLocations> {
        if (pageURL === null){
            pageURL = `${PokeAPI.baseURL}/location-area`;
        }
        const cached = this.#pokeCache.get<ShallowLocations>(pageURL);
        if (cached != undefined) {
            return cached;
        }
        const response = await fetch(pageURL);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const api_data = await response.json();
        this.#pokeCache.add<ShallowLocations>(pageURL, api_data);
        return api_data;
        }

    async fetchLocation(locationName: string): Promise<Location> {
        if (!locationName){
            throw new Error(`I need a name, dumbass`);
        }
        const locationURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const cached = this.#pokeCache.get<Location>(locationURL);
        if (cached != undefined) {
            return cached;
        }
        const response = await fetch(locationURL)
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const location_data =  await response.json();
        this.#pokeCache.add<Location>(locationURL, location_data);

        return location_data;
    }

    async catchPokemon(pokemon: string): Promise<Pokemon>{
        if (!pokemon){
            throw new Error("Catching air is easy, but try it over there");
        }
        const pokeURL = `${PokeAPI.baseURL}/pokemon/${pokemon}`;
        const response = await fetch(pokeURL);
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const pokemon_data =  await response.json();
        return pokemon_data;
    }
}


export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<{name: string, url:string}>;

};

export type Location = {
    encounter_method_rates: Array<{
        encounter_method: { name: string, url: string },
        version_details: Array<{ rate: number, version: { name: string, url: string } }>
    }>;
    game_index: number;
    id: number;
    location: {name:string, url:string};
    name: string;
    names: Array<{language: {name:string, url:string}, name:string}>;
    pokemon_encounters: Array<{
        pokemon:{name:string, url:string},
        version_details: Array<{
            encounter_details: Array<{
                chance:number,
                condition_values:Array<string>,
                max_level:number,
                method:{name:string, url:string},
                min_level: number}>
            max_chance: number,
            version: {name:string, url:string}}>}>

}

export type Pokemon = {
    abilities: Array<{
        ability: {name:string, url:string},
        is_hidden: boolean,
        slot: number
    }>,
    base_experience: number,
    cries: {latest: string, legacy: string},
    forms: Array<{
        name: string, url: string}>,
    game_indicies: Array<{
        game_index: number,
        version: {name: string, url: string}
    }>,
    height: number,
    held_items: Array<{name: string, url:string}>,
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: Array<{
        move: {name: string, url: string},
        version_group_details: Array<{
            level_learned_at: number,
            move_learn_method: {name: string, url: string},
            order: string|null,
            version_group: {name: string, url: string},
        }>
    }>,
    name: string,
    order: number,
    past_abilities: Array<{
        abilities: {is_hidden:boolean, slot:number, ability: string|null},
        generation: {name:string, url: string}
    }>,
    past_stats: Array<{
        generation: {name: string, url: string},
        stats: Array<{
            base_stat: number,
            effort: number,
            stat: {name:string, url:string}
        }>
    }>,
    past_types: Array<string>,
    species: {name:string, url:string},
    sprites: {
        back_default: string,
        back_female: string | null,
        back_shiny: string|null,
        back_shiny_female: string|null,
        front_default: string,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null,
    },
    stats: Array<{
        base_stat: number,
        effot: number,
        stat: {name:string, url:string},
    }>,
    types: Array<{
        slot:number,
        type: {name:string, url:string},
    }>,
    weight: number

}