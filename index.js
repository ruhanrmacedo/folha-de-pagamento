const listaFuncionarios = []

function adicionarFuncionario(id, nome, cargo, taxaHoraria){
    let funcionario = {
        id: id,
        nome: nome,
        cargo: cargo,
        taxaHoraria: taxaHoraria,
        horasTrabalhadas: []
    }

    listaFuncionarios.push(funcionario)
}

function registrarHoraTrabalhada(idFuncionario, numHoras){
    listaFuncionarios.map((funcionario) => {
        if(funcionario.id === idFuncionario){
            funcionario.horasTrabalhadas.push(numHoras)
        }
    })
}

function calcularSalarioMensal(funcionario){
    let totalHoras = 0
    funcionario.horasTrabalhadas.map(hora => {
        totalHoras += hora
    })

    return totalHoras * funcionario.taxaHoraria

}

function calcularInss(funcionario){
    let salarioBruto = calcularSalarioMensal(funcionario)
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

function gerarRelatorioPagamento() {
    console.log('-------GERAR RELATÓRIO DE PAGAMENTO-------\n');
    listaFuncionarios.forEach((funcionario) => {
        let totalHoras = 0;
        funcionario.horasTrabalhadas.forEach((hora) => {
            totalHoras += hora;
        });

        const salario = calcularSalarioMensal(funcionario);
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Cargo: ${funcionario.cargo}`);
        console.log(`Horas trabalhadas: ${totalHoras}`);
        console.log(`Descontos: INSS R$${calcularInss(funcionario).toFixed(2)}`);
        console.log(`Salário bruto: R$${salario.toFixed(2)}`);
        console.log(`Salário líquido: R$${(salario - calcularInss(funcionario)).toFixed(2)}`);
        console.log('------------------------------------------\n');
    });
}



adicionarFuncionario(1, 'João', 'Analista de Sistemas', 10)
adicionarFuncionario(2, 'Maria', 'Gerente de Projetos', 15)
adicionarFuncionario(3, 'José', 'Desenvolvedor', 80)
adicionarFuncionario(4, 'Ana', 'Analista de Sistemas', 10)
registrarHoraTrabalhada(1, 8)
registrarHoraTrabalhada(2, 8)
registrarHoraTrabalhada(3, 8)
registrarHoraTrabalhada(4, 6)
registrarHoraTrabalhada(1, 6)
registrarHoraTrabalhada(2, 8)
registrarHoraTrabalhada(3, 5)
registrarHoraTrabalhada(4, 6)
registrarHoraTrabalhada(2, 8)
registrarHoraTrabalhada(3, 8)
registrarHoraTrabalhada(4, 6)

calcularSalarioMensal(listaFuncionarios[0])
calcularSalarioMensal(listaFuncionarios[1])
calcularSalarioMensal(listaFuncionarios[2])
calcularSalarioMensal(listaFuncionarios[3])

gerarRelatorioPagamento()

