export default class Cl_mPersona {
    private _nombre: string;
    private _edad: number;

    constructor({nombre, edad}: {nombre:string, edad:number}={nombre: "", edad: 0}) {
        this._nombre = nombre;
        this._edad = edad;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set edad(edad:number){
        this._edad = +edad;
    }

    get edad(){
        return this._edad;
    }
}