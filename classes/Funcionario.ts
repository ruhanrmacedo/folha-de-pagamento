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
}

export default Funcionario;