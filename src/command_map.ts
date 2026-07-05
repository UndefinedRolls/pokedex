
export async function commandMap(state: State) {
    if (state.nextLocationsURL == null && state.prevLocationsURL != null){
        console.log("You are currently on the last page.");
    }
    else{
    const Location_List = await state.api.fetchLocations(state.nextLocationsURL)
    state.nextLocationsURL = Location_List.next;
    state.prevLocationsURL = Location_List.previous;
    for (const loc of Location_List.results) {
        console.log(loc.name);
    }
}}

export async function commandMapb(state: State){
    if (!state.prevLocationsURL){
        console.log("You are currently on the first page.");
    }
    else {
        const Location_List = await state.api.fetchLocations(state.prevLocationsURL);
        state.nextLocationsURL = Location_List.next;
        state.prevLocationsURL = Location_List.previous;
        for (const loc of Location_List.results) {
            console.log(loc.name);
        }
    }
}