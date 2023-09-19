export interface Item {
    id: number;
    title: string;
    price: number;
    imageUrl?: string;
    stock: Stock
}

export interface Stock {
    xlarge: number;
    large: number;
    medium: number;
    small: number;
}

export class List<T> {
    private _items: T[];

    public constructor() {
        this._items = [];
    }

    public concatList(list: T[]) {
        this._items = this._items.concat(list);
    }

    public addItem(newItem: T) {
        this._items.push(newItem);
    }

    public getIndex(index: number) {
        if (!this._items[index]) throw new Error(`Index [${index}] does not exist in list`);
        return this._items[index];
    }

    get All() {
        return this._items;
    }

    get Length() {
        return this._items.length;
    }

    public removeIndex(index: number): T {
        if (!this._items[index]) throw new Error(`Index [${index}] does not exist in list`);
        return this._items.splice(index, 1)[0];
    }

    public updateIndex(index: number, newValue: T): T {
        if (!this._items[index]) throw new Error(`Index [${index}] does not exist in list`);
        const previous = this._items[index];
        this._items[index] = newValue;
        return previous;
    }

    public clear(): T[] {
        const previous = this._items;
        this._items = [];
        return previous;
    }
}