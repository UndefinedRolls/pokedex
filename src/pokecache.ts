export type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache =new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined;
    #interval: number;
    constructor(wait_time: number) {
        this.#interval = wait_time;
        this.#startReapLoop()
    };

    add<T>(key:string, val:T): void
    {

        this.#cache.set(key, {createdAt: Date.now(), val});
    }

    get<T>(key:string): T | undefined {
        let cacheEntry = this.#cache.get(key);
        if (cacheEntry != undefined){
            return cacheEntry.val;
        }
        return undefined;

    }

    #reap(): void {
        for (let [key, cacheEntry] of this.#cache) {
            if (!cacheEntry){
                continue;
            }
            let age = Date.now() - cacheEntry.createdAt
            if (age > this.#interval) {
                this.#cache.delete(key);
                continue;
            }
        }
    }

    #startReapLoop(){
        this.#reapIntervalId = setInterval(this.#reap.bind(this), this.#interval);
    }

    stopReapLoop(){
        clearInterval(this.#reapIntervalId);
    }
}