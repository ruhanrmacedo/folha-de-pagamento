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

function exibirSalarios() {
    listaFuncionarios.forEach((funcionario) => {
        const salario = calcularSalarioMensal(funcionario);
        console.log(`${funcionario.nome} recebeu R$${salario.toFixed(2)}`);
    });
}



adicionarFuncionario(1, 'João', 'Analista de Sistemas', 100)
adicionarFuncionario(2, 'Maria', 'Gerente de Projetos', 150)
adicionarFuncionario(3, 'José', 'Desenvolvedor', 80)
adicionarFuncionario(4, 'Ana', 'Analista de Sistemas', 100)
registrarHoraTrabalhada(1, 8)
registrarHoraTrabalhada(2, 8)
registrarHoraTrabalhada(3, 8)
registrarHoraTrabalhada(4, 6)
registrarHoraTrabalhada(1, 8)
registrarHoraTrabalhada(2, 8)
registrarHoraTrabalhada(3, 5)
registrarHoraTrabalhada(4, 6)
registrarHoraTrabalhada(1, 8)
registrarHoraTrabalhada(2, 8)
registrarHoraTrabalhada(3, 8)
registrarHoraTrabalhada(4, 6)

console.log(listaFuncionarios)

calcularSalarioMensal(listaFuncionarios[0])
calcularSalarioMensal(listaFuncionarios[1])
calcularSalarioMensal(listaFuncionarios[2])
calcularSalarioMensal(listaFuncionarios[3])

exibirSalarios()

