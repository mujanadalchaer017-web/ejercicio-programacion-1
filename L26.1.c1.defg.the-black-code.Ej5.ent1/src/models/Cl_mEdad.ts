import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mEdad {
    private contadorPersonas: number = 0;
    private contadorPersonasMayor: number = 0;
    private contadorPersonasMenor: number = 0;
    private acumEdadPersonas: number = 0;
    private acumEdadMayores: number = 0;
    private acumEdadMenor: number = 0;

    procesarPersona(persona: Cl_mPersona): void {
         
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

    cantidadPersonas(): number {
        return this.contadorPersonas;
    }

    cantidadPersonasMayores(): number {
        return this.contadorPersonasMayor;
    }

    cantidadPersonasMenor(): number {
        return this.contadorPersonasMenor;
    }

    porcentajePersonasMenor(): number {
        if (this.contadorPersonas === 0) return 0;
        return this.contadorPersonasMenor / this.contadorPersonas * 100;
    }

    porcentajePersonasMayores(): number {
  if (this.contadorPersonas === 0) return 0;
        return (this.contadorPersonasMayor / this.contadorPersonas) * 100;
}
}