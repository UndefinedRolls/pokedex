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