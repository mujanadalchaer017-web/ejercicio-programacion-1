export default class Cl_mEdad {
    contadorPersonas = 0;
    contadorPersonasMayor = 0;
    contadorPersonasMenor = 0;
    acumEdadPersonas = 0;
    acumEdadMayores = 0;
    acumEdadMenor = 0;
    procesarPersona(persona) {
        this.contadorPersonas++;
        this.acumEdadPersonas += persona.edad;
        if (persona.edad >= 18) {
            this.contadorPersonasMayor++;
            this.acumEdadMayores += persona.edad;
        }
        if (persona.edad < 18) {
            this.contadorPersonasMenor++;
            this.acumEdadMenor += persona.edad;
        }
    }
    cantidadPersonas() {
        return this.contadorPersonas;
    }
    cantidadPersonasMayores() {
        return this.contadorPersonasMayor;
    }
    cantidadPersonasMenor() {
        return this.contadorPersonasMenor;
    }
    porcentajePersonasMenor() {
        if (this.contadorPersonas === 0)
            return 0;
        return this.contadorPersonasMenor / this.contadorPersonas * 100;
    }
    porcentajePersonasMayores() {
        if (this.contadorPersonas === 0)
            return 0;
        return (this.contadorPersonasMayor / this.contadorPersonas) * 100;
    }
}
//# sourceMappingURL=Cl_mEdad.js.map