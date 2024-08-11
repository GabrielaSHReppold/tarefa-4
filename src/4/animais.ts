export class Animal {
    id: number;
    nome: string;
    tipo: string;
    raça: string;
    idade: number;
    historicoBanhos: Date[];
    dono: { nome: string, contato: string };
    ultimaConsulta: Date;
  
    constructor(
      nome: string,
      tipo: string,
      raça: string,
      idade: number,
      dono: { nome: string, contato: string },
    ) {
      this.id = this.gerarId();
      this.nome = nome;
      this.tipo = tipo;
      this.raça = raça;
      this.idade = idade;
      this.historicoBanhos = [];
      this.dono = dono;
      this.ultimaConsulta = new Date();
    }
  
    private gerarId(): number {
      return Math.random()
    }
  
    public registrarBanho(data: Date): void {
      this.historicoBanhos.push(data);
    }

    public verificarVacinas(): string {
      return `Vacinas atualizadas para ${this.nome}`;
    }
  
    public agendarConsulta(data: Date): void {
      this.ultimaConsulta = data;
    }
  
    public atualizarDono(novoNome: string, novoContato: string): void {
      this.dono.nome = novoNome;
      this.dono.contato = novoContato;
    }
  }