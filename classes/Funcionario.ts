class Funcionario {
    id: number;
    nome: string;
    cargo: string;
    taxaHoraria: number;
    horasTrabalhadas: number;

    constructor(id: number, nome: string, cargo: string, taxaHoraria: number, horasTrabalhadas: number) {
        this.id = id;
        this.nome = nome;
        this.cargo = cargo;
        this.taxaHoraria = taxaHoraria;
        this.horasTrabalhadas = horasTrabalhadas;
    }

    registrarHoras(horas: number): void {
        this.horasTrabalhadas += horas;
    }
    
    calcularSalarioMensal(): number {
        return this.taxaHoraria * this.horasTrabalhadas;
    }
}

export default Funcionario;