import Funcionario from './classes/Funcionario';

const prompt = require('prompt-sync')();

const listaFuncionarios: Funcionario[] = [];

function adicionarFuncionario(): void {
    const nome = prompt('Digite o nome do funcionário: ');
    const cargo = prompt('Digite o cargo do funcionário: ');
    const taxaHoraria = parseFloat(prompt('Digite a taxa horária do funcionário: '));

    if (!nome || !cargo) {
        console.log('Dados inválidos!\n');
        return;
    }

    if (isNaN(taxaHoraria) || taxaHoraria <= 0) {
        console.log('A taxa horária deve ser maior que zero!\n');
        return;
    }

    const funcionario = new Funcionario(nome, cargo, taxaHoraria, 0)
    listaFuncionarios.push(funcionario)
    console.log(`Funcionário ${funcionario.nome} com ID ${funcionario.id} adicionado com sucesso!\n`);
}

function registrarHoraTrabalhada(): void {
    const idFuncionario = prompt('Digite o id do funcionário: ');
    const numHoras = parseInt(prompt('Digite o número de horas trabalhadas: '));

    if (!idFuncionario) {
        console.log('Id inválido!\n');
        return;
    }

    if (isNaN(numHoras) || numHoras <= 0) {
        console.log('O número de horas deve ser maior que zero!\n');
        return;
    }

    const funcionario = listaFuncionarios.find((funcionario) => funcionario.id === idFuncionario);

    if (funcionario) {
        funcionario.registrarHoras(numHoras);
        console.log(`O total de ${numHoras} horas foi registrado para o funcionário ${funcionario.nome}!\n`);
    } else {
        console.log('Funcionário não encontrado!\n');
    }
}

function gerarRelatorioPagamento() {
    console.log('-------GERAR RELATÓRIO DE PAGAMENTO-------\n');
    listaFuncionarios.forEach((funcionario) => {
        const salarioBruto = funcionario.calcularSalarioMensal();
        const inss = funcionario.calcularInss(funcionario);

        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Cargo: ${funcionario.cargo}`);
        console.log(`Horas trabalhadas: ${funcionario.horasTrabalhadas}`);
        console.log(`Desconto INSS: R$${inss.toFixed(2)}`);
        console.log(`Salário bruto: R$${salarioBruto.toFixed(2)}`);
        console.log(`Salário líquido: R$${(salarioBruto - inss).toFixed(2)}`);
        console.log('------------------------------------------\n');
    });
}

function exibirListaFuncionarios() {
    console.log('Listando funcionários...');
    listaFuncionarios.forEach((funcionario) => {
        funcionario.exibirInformacoes();
    });
    console.log('Pressione qualquer tecla para volta ao menu principal...');
    prompt();
}

function gerenciarFolhaPagamento() {
    let opcao: number;

    do {
        console.log('-------GERENCIAR FOLHA DE PAGAMENTO-------\n');
        console.log('1 - Adicionar funcionário');
        console.log('2 - Registrar hora trabalhada');
        console.log('3 - Exibir relatório de pagamento');
        console.log('4 - Exibir lista de funcionários');
        console.log('5 - Sair\n');

        opcao = parseInt(prompt('Digite a opção desejada: '));

        switch (opcao) {
            case 1:
                adicionarFuncionario();
                break;

            case 2:
                registrarHoraTrabalhada();
                break;

            case 3:
                gerarRelatorioPagamento();
                break;

            case 4:
                exibirListaFuncionarios();
                break;

            case 5:
                console.log('Saindo...');
                break;

            default:
                console.log('Opção inválida!\n');
                break;
        }
    } while (opcao !== 5);
}

gerenciarFolhaPagamento();
