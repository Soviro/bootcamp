import { Animal } from "../abstract/Animal";

export class Rat extends Animal {
    private _color: String = 'brown';
      
    constructor(name: String, sex: String, color: String) {
        super(name,sex);
        this._color = color;

    }
    
    public move(): void {
        console.log("He moves over land and in water");
    }

    public get color(): String {
        return this._color;
    }
    public set color(value: String) {
        this._color = value;
    }
}