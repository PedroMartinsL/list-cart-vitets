import Product from "./Product";

export default class Cart {
    private _items: { [key: number]: Product } = {};

    private _totalPrice: number = 0;
    private _totalItems: number = 0;

    

    get items(): { [key: number]: Product } {
        return this._items;
    }

    get totalPrice(): number {
        return this._totalPrice;
    }

    get totalItems(): number {
        return this.totalItems;
    }

    set totalPrice(price: number) {
        this._totalPrice = price;
    }
    
    set totalItems(items: number) {
        this._totalItems = items;
    }

}