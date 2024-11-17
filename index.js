const listaFuncionarios = []

const adicionarFuncionario = (id, nome, cargo, taxaHoraria) => {
    let funcionario = {
        id: id,
        nome: nome,
        cargo: cargo,
        taxaHoraria: taxaHoraria,
        horasTrabalhadas: []
    }

    listaFuncionarios.push(funcionario)
}

adicionarFuncionario(1, 'João', 'Analista de Sistemas', 100)
console.log(listaFuncionarios)
