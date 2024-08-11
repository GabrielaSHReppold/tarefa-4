import { FormatoDeElemento } from "./FormatoDeElemento";

export class Retangulo implements FormatoDeElemento {
    public comprimento: number;
    public altura: number;

    constructor(comprimento: number, altura: number) {
        this.comprimento = comprimento;
        this.altura = altura;
    }

    desenhar(): void {
        console.log(`Desenhando um retângulo com comprimento: ${this.comprimento} e altura: ${this.altura}`);
    }

    redimensionar(): void {
        console.log("Redimensionando o retângulo...");
    }
}