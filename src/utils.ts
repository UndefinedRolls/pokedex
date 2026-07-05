export class InventoryManager {
    constructor() {
        this.items = {};
    }

    addItem(name, quantity, category) {
        if (!name || quantity <= 0 || !category){
            return false;
        }
        if (!this.items[name]){
            this.items[name] = {
                name,
                quantity,
                category,
            }
        }
        else
        {
            this.items[name].quantity += quantity;
            this.items[name].category = category;
        }
        return true;
    }

    updateItem(name, quantity) {
        if (!this.items[name]){
            return false;
        }
        if (quantity > 0){
            this.items[name].quantity = quantity;
        }
        else{
            delete this.items[name]
        }
        return true
    }

    removeItem(name) {
        if (!this.items[name]){
            return false
        }
        delete this.items[name];
        return true;
    }

    searchItems(term:string) {
        for (let item in this.items){
            if (term in item.name || term in item.category){
                console.log(item.name);
            }
        }
    }

    getSummary() {
        return {
            totalQuantity: 0,
            distinctItems: 0,
            lowStock: [],
        };
    }
}

export function formatInventoryReport(manager) {
    return "";
}
