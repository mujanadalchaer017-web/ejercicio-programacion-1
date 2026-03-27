export default class Cl_vPersona{
    inNombre: HTMLInputElement;
    inEdad: HTMLInputElement;
 
    btCancelar: any;
    btAceptar: any;
    vista: HTMLElement;

    constructor(){
        this.vista = document.getElementById("edad") as HTMLElement;
        this.inNombre = document.getElementById("persona_inNombre") as HTMLInputElement;
        this.inEdad = document.getElementById("persona_inEdad") as HTMLInputElement;
        this.btCancelar = document.getElementById("persona_btCancelar");
        this.btAceptar = document.getElementById("persona_btAceptar");
        this.mostrar();
    }
    get nombre(): string {
        return this.inNombre.value
    }
    get edad():number{
        return +this.inEdad.value
    }

    mostrar(): void {
        if (this.vista === null) return;
        this.vista.hidden = false;
    }
    
    ocultar(): void {
        if (this.vista === null) return;
        this.vista.hidden = true;
    }
    
}
