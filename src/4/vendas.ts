import { Produto } from './produtos';

export class Venda {
  id: number;
  produtos: { produto: Produto, quantidade: number }[];
  dataVenda: Date | null;
  total: number;
  formaPagamento: string | null;
  vendedor: string;
  cliente: string | null;

  constructor(vendedor: string, cliente: string | null = null) {
    this.id = this.gerarId();
    this.produtos = [];
    this.dataVenda = null;
    this.total = 0;
    this.formaPagamento = null;
    this.vendedor = vendedor;
    this.cliente = cliente;
  }

  private gerarId(): number {
    return Math.floor(Math.random() * 1000000);
  }

  public adicionarProduto(produto: Produto, quantidade: number): void {
    this.produtos.push({ produto, quantidade });
    this.calcularTotal();
  }

    public removerProduto(produtoId: string | number): void { 
    this.produtos = this.produtos.filter(item => item.produto);
    this.calcularTotal();
  }

  public calcularTotal(): void {
    this.total = this.produtos.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);
  }
}
