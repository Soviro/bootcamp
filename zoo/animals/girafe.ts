import { Animal } from "../abstract/Animal";

export class Girafe extends Animal {
    private _height: number = 0;
      
    constructor(name: String, sex: String, height: number) {
        super(name,sex);
        this._height = height;

    }
    
    public move(): void {
        console.log("He moves over land");
    }

    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
}