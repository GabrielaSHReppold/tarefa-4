import { Animal } from "./animal";

export class Cavalo extends Animal {
    protected velocidade: number;

    public getVelocidade(): number {
            return this.velocidade;
    }

    constructor(
        nome: string,
        idade: number,
        peso: number,
        altura: number,
        cor: string,
        especie: string,
        velocidade: number
    ) {
        super(nome, idade, peso, altura, cor, especie);
        this.velocidade = velocidade;
    }

    public galopar(): void {
        console.log(`${this.nome} está galopando a uma velocidade de ${this.velocidade} km/h.`);
    }

    public emitirSom(): void {
        console.log(`${this.nome} está relinchando: Iiirrrrí!`);
    }

    
}
