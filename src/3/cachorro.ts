import { Animal } from "./animal";

export class Cachorro extends Animal {
    private _raca: string;

    public getRaca(): string {
        return this._raca;
    }

    constructor(
        nome: string,
        idade: number,
        peso: number,
        altura: number,
        cor: string,
        especie: string,
        raca: string
    ) {
        super(nome, idade, peso, altura, cor, especie);
        this._raca = raca;
    }

    public abanarORabo(): void {
        console.log(`${this.nome} está abanando o rabo.`);
    }

    public emitirSom(): void {
        console.log(`${this.nome} está latindo: Au Au!`);
    }
}

