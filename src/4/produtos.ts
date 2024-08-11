export class Produto {
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
  
    constructor(nome: string, preco: number, descricao: string, quantidade: number) {
      this.nome = nome;
      this.preco = preco;
      this.descricao = descricao;
      this.quantidade = quantidade; 
    }
}
  
  