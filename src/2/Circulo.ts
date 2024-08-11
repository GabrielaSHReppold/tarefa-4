import { FormatoDeElemento } from "./FormatoDeElemento";

export class Circulo implements FormatoDeElemento {
    public raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    desenhar(): void {
        console.log(`Desenhando um círculo com raio: ${this.raio}`);
    }

    redimensionar(): void {
        console.log("Redimensionando o círculo...");
    }
}
