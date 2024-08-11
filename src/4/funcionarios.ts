export class Funcionario {
    nome: string;
    cargo: string;
    turno: string;
    salario: number;
    presencas: Date[];
    contato: { telefone: number, email: string };
  
    constructor(
      nome: string,
      cargo: string,
      turno: string,
      salario: number,
      contato: { telefone: number, email: string }
    ) {
      this.nome = nome;
      this.cargo = cargo;
      this.turno = turno;
      this.salario = salario;
      this.presencas = [];
      this.contato = contato;
    }
  
    public registrarPresenca(data: Date): void {
      this.presencas.push(data);
    }
  
    public atualizarCargo(novoCargo: string): void {
      this.cargo = novoCargo;
    }
  
    public atualizarContato(novoTelefone: number, novoEmail: string): void {
      this.contato.telefone = novoTelefone;
      this.contato.email = novoEmail;
    }
  }
  