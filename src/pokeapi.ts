export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
        if (pageURL === null){
            pageURL = `${PokeAPI.baseURL}/location-area`
        }
        const response = await fetch(pageURL);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return await response.json();
        }

    async fetchLocation(locationName: string): Promise<Location> {
        //TODO: get complete location data
    }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<{name: string, url:string}>;

};

export type Location = {
    //TODO: define Location
};