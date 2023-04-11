export abstract class Animal {
    protected _name: String;
    private _sex: String; 
 
    constructor (name: String, sex: String) {
      this._name = name;
      this._sex = sex;
    }

    abstract move(): void;

    protected get name(): String {
      return this._name;
    }
    protected set name(value: String) {
      this._name = value;
    }

    protected get sex(): String {
      return this._sex;
    }
    protected set sex(value: String) {
      this._sex = value;
    }
}