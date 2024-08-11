export class Animal {
    protected nome: string;
    protected idade: number;
    protected peso: number;
    protected altura: number;
    protected cor: string;
    protected especie: string;
  
    constructor(
      nome: string,
      idade: number,
      peso: number,
      altura: number,
      cor: string,
      especie: string
    ) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.cor = cor;
      this.especie = especie;
    }
  
    public comer(): void {
      console.log(`${this.nome} está comendo.`);
    }
  
    public dormir(): void {
      console.log(`${this.nome} está dormindo.`);
    }
  
    public emitirSom(): void {
      console.log(`${this.nome} está emitindo um som.`);
    }
  }
  