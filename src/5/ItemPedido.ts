import { Desconto } from "./interface";
import { ValorPedido } from "./interface";

export class ItemPedido implements Desconto, ValorPedido {
      public valor: number;
      public nome: string;
      public quantidade: number;

      constructor(valor: number, nome: string, quantidade: number) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
      }

      recuperarValorTotal(): number {
        return this.valor * this.quantidade;
      }

      aplicarDescontoEmPorcentagem(desconto: number): void {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        this.valor -= descontoEmReais;
      }

      aplicarDescontoEmReais(desconto: number): void {
        this.valor -= desconto;
      }

      removerItem(item: string): void {
        throw new Error("Método não aplicável a itens individuais.");
      }
}