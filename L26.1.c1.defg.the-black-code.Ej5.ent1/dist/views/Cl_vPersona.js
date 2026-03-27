export default class Cl_vPersona {
    inNombre;
    inEdad;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("edad");
        this.inNombre = document.getElementById("persona_inNombre");
        this.inEdad = document.getElementById("persona_inEdad");
        this.btCancelar = document.getElementById("persona_btCancelar");
        this.btAceptar = document.getElementById("persona_btAceptar");
        this.mostrar();
    }
    get nombre() {
        return this.inNombre.value;
    }
    get edad() {
        return +this.inEdad.value;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vPersona.js.map