import Cl_mEdad from "../models/Cl_mEdad.js";
import Cl_vEdad from "../views/Cl_vEdad.js";
import Cl_cPersona from "./Cl_cPersona.js";

export default class Cl_cEdad {
    private mEdad: Cl_mEdad;
    private vEdad: Cl_vEdad;

    constructor() {
        this.mEdad = new Cl_mEdad();
        this.vEdad = new Cl_vEdad();
        this.vEdad.btProcesarPersonas.onclick= ()=> this.procesarPersona();
    }

    procesarPersona(): void {
        new Cl_cPersona({
            callback: (persona) => {
                if(persona) {
                this.mEdad.procesarPersona(persona);
                this.vEdad.reportar({edad: this.mEdad});
            }
            },
        });
    }
    
}