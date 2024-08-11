export abstract class Item {
    public valor: double;
    public nome: string;
    public descricao: string;

    constructor(valor: double, nome: string, descricao: string) {
        this.valor = valor;
        this.nome = nome;
        this.descricao = descricao;
    }
}