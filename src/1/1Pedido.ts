import { Item } from "./1Item";

export abstract class Pedido {
    public itens: Item[];
    public valorTotal: double;

    constructor(itens: Item[], valorTotal: double) {
        this.itens = itens;
        this.valorTotal = valorTotal;
    }
}

