import { Animal } from "./animal";

export class Gato extends Animal {
    private _tempoDeVida: number;

    public getTempoDeVida(): number {
        return this._tempoDeVida;
    }

    constructor(
        nome: string,
        idade: number,
        peso: number,
        altura: number,
        cor: string,
        especie: string,
        tempoDeVida: number
    ) {
        super(nome, idade, peso, altura, cor, especie);
        this._tempoDeVida = tempoDeVida;
    }

    public ronronar(): void {
        console.log(`${this.nome} está ronronando.`);
    }

    public emitirSom(): void {
        console.log(`${this.nome} está miando: Miau!`);
    }
}
