import Cl_mPersona from "../models/Cl_mPersona";
import Cl_mEdad from "../models/Cl_mEdad";

export default class Cl_vEdad{
    lblCantidadPersonas: HTMLLabelElement;
    lblCantidadPersonasMayores: HTMLLabelElement;
    lblCantidadPersonasMenor: HTMLLabelElement;
    lblPorcentajePersonasMenor: HTMLLabelElement;
    lblPorcentajePersonasMayores: HTMLLabelElement;
    btProcesarPersonas: HTMLButtonElement;

    constructor(){
        this.lblCantidadPersonas = document.getElementById("body_lblCantidadPersonas",) as HTMLLabelElement;
        this.lblCantidadPersonasMayores = document.getElementById("body_lblCantidadPersonasMayores",) as HTMLLabelElement;
        this.lblCantidadPersonasMenor= document.getElementById("body_lblCantidadPersonasMenor",) as HTMLLabelElement;
        this.lblPorcentajePersonasMenor = document.getElementById("body_lblPorcentajePersonasMenor",) as HTMLLabelElement;
        this.lblPorcentajePersonasMayores = document.getElementById("body_lblPorcentajePersonasMayores",) as HTMLLabelElement;
        this.btProcesarPersonas = document.getElementById("body_btProcesarPersonas",) as HTMLButtonElement;
    
    }

    reportar({edad}: {edad: Cl_mEdad}):void {
        this.lblCantidadPersonas!.innerHTML = `${edad.cantidadPersonas()}`;
        this.lblCantidadPersonasMayores!.innerHTML = `${edad.cantidadPersonasMayores()}`;
        this.lblCantidadPersonasMenor!.innerHTML = `${edad.cantidadPersonasMenor()}`;
        this.lblPorcentajePersonasMenor!.innerHTML = `${edad.porcentajePersonasMenor()}`;
        this.lblPorcentajePersonasMayores!.innerHTML = `${edad.porcentajePersonasMayores()}`;

        
        
    }
}

