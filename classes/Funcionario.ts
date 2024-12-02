import { randomUUID } from "crypto";

class Funcionario {
    id: string;
    nome: string;
    cargo: string;
    taxaHoraria: number;
    horasTrabalhadas: number;

    constructor(nome: string, cargo: string, taxaHoraria: number, horasTrabalhadas: number) {
        this.id = randomUUID().substring(0, 4);
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

    calcularInss(funcionario: Funcionario): number {
        const salarioBruto = funcionario.calcularSalarioMensal();
        let inss = 0
    
        if(salarioBruto > 4000.04){
            inss = salarioBruto * 0.14
        } else if(salarioBruto > 2666.69){
            inss = salarioBruto * 0.12
        } else if(salarioBruto > 1412.01){
            inss = salarioBruto * 0.09
        } else {
            inss = salarioBruto * 0.075
        }
    
        if(inss > 908.85){
            inss = 908.85
        }
    
        return inss
    
    }
    
    exibirInformacoes(): void {
        console.log('-------INFORMAÇÕES DO FUNCIONÁRIO-------');
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`-----------------------------\n`);
    }
}

export default Funcionario;