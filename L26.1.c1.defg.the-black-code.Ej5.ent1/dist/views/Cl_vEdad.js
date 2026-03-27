export default class Cl_vEdad {
    lblCantidadPersonas;
    lblCantidadPersonasMayores;
    lblCantidadPersonasMenor;
    lblPorcentajePersonasMenor;
    lblPorcentajePersonasMayores;
    btProcesarPersonas;
    constructor() {
        this.lblCantidadPersonas = document.getElementById("body_lblCantidadPersonas");
        this.lblCantidadPersonasMayores = document.getElementById("body_lblCantidadPersonasMayores");
        this.lblCantidadPersonasMenor = document.getElementById("body_lblCantidadPersonasMenor");
        this.lblPorcentajePersonasMenor = document.getElementById("body_lblPorcentajePersonasMenor");
        this.lblPorcentajePersonasMayores = document.getElementById("body_lblPorcentajePersonasMayores");
        this.btProcesarPersonas = document.getElementById("body_btProcesarPersonas");
    }
    reportar({ edad }) {
        this.lblCantidadPersonas.innerHTML = `${edad.cantidadPersonas()}`;
        this.lblCantidadPersonasMayores.innerHTML = `${edad.cantidadPersonasMayores()}`;
        this.lblCantidadPersonasMenor.innerHTML = `${edad.cantidadPersonasMenor()}`;
        this.lblPorcentajePersonasMenor.innerHTML = `${edad.porcentajePersonasMenor()}`;
        this.lblPorcentajePersonasMayores.innerHTML = `${edad.porcentajePersonasMayores()}`;
    }
}
//# sourceMappingURL=Cl_vEdad.js.map