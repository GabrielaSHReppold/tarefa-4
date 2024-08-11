export abstract class base {
    criadoEm: Date;
    atualizadoEm: Date;
  
    constructor() {
      this.criadoEm = new Date();
      this.atualizadoEm = new Date();
    }
  
}
  
    atualizarTempoEstimado(): void {
      this.atualizadoEm = new Date();
    }

  