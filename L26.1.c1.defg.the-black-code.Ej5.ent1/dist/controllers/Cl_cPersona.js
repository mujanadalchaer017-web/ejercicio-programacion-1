import Cl_mPersona from "../models/Cl_mPersona.js";
import vista from "../views/Cl_vPersona.js";
export default class Cl_cPersona {
    vista = new vista();
    callback;
    constructor({ callback }) {
        this.callback = callback;
        this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
        this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mPersona({
            nombre: this.vista.nombre,
            edad: this.vista.edad
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cPersona.js.map