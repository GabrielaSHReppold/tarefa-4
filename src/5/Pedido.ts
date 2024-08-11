import { ValorPedido } from "./interface";
import { Desconto } from "./interface";
import { ItemPedido } from "./ItemPedido";

export class Pedido implements ValorPedido, Desconto {
  public itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  removerItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return total;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.recuperarValorTotal() * porcentagem;
    this.itens.forEach((item) => {
      const itemDesconto = (item.valor * porcentagem);
      item.aplicarDescontoEmReais(itemDesconto);
    });
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.itens.forEach((item) => {
      const itemDesconto = (item.valor * (desconto / this.recuperarValorTotal()));
      item.aplicarDescontoEmReais(itemDesconto);
    });
  }
}
