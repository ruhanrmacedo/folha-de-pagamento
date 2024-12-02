import Funcionario from './classes/Funcionario';

const prompt = require('prompt-sync')();

const listaFuncionarios: Funcionario[] = [];

function adicionarFuncionario(id: number, nome: string, cargo: string, taxaHoraria: number): void {
    const funcionario = new Funcionario(id, nome, cargo, taxaHoraria, 0)

    listaFuncionarios.push(funcionario)
    console.log('Funcionário adicionado com sucesso!\n');
}

function registrarHoraTrabalhada(idFuncionario: number, numHoras: number): void {
    const funcionario = listaFuncionarios.find((funcionario) => funcionario.id === idFuncionario);
    if (funcionario) {
        funcionario.registrarHoras(numHoras);
        console.log('Horas registradas com sucesso para ${funcionario.nome}: ${numHoras} horas\n');
    } else {
        console.log('Funcionário não encontrado!\n');
    }
}

function calcularSalarioMensal(funcionario: Funcionario): number {
    return funcionario.calcularSalarioMensal();
}

function testarFuncionalidades(): void {
    // Adiciona funcionários
    adicionarFuncionario(1, 'João', 'Desenvolvedor', 30);
    adicionarFuncionario(2, 'Maria', 'Designer', 25);
    adicionarFuncionario(3, 'José', 'Analista de Sistemas', 35);

    // Adiciona horas trabalhadas
    registrarHoraTrabalhada(1, 10);
    registrarHoraTrabalhada(2, 15);
    registrarHoraTrabalhada(3, 20);

    // Calcula salário mensal

    console.log('-------Testar Funcionalidades-------\n');
    listaFuncionarios.forEach((funcionario) => {
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Cargo: ${funcionario.cargo}`);
        console.log(`Horas trabalhadas: ${funcionario.horasTrabalhadas}`);
        console.log(`Salário mensal: R$${calcularSalarioMensal(funcionario).toFixed(2)}`);
        console.log('----------------------------------\n');
    });
}

testarFuncionalidades();

/*
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

function gerenciarFolhaPagamento(){
    let opcao = 0

    while(opcao !== 4){
        console.log('-------GERENCIAR FOLHA DE PAGAMENTO-------\n');
        console.log('1 - Adicionar funcionário');
        console.log('2 - Registrar hora trabalhada');
        console.log('3 - Exibir relatório de pagamento');
        console.log('4 - Sair');

        opcao = parseInt(prompt('Digite a opção desejada: '));

        switch(opcao){
            case 1:
                const id = parseInt(prompt('Digite o id do funcionário: '));
                const nome = prompt('Digite o nome do funcionário: ');
                const cargo = prompt('Digite o cargo do funcionário: ');
                const taxaHoraria = parseFloat(prompt('Digite a taxa horária do funcionário: '));
                adicionarFuncionario(id, nome, cargo, taxaHoraria);
                console.log('Funcionário adicionado com sucesso!\n');
                break;

            case 2:
                const idFuncionario = parseInt(prompt('Digite o id do funcionário: '));
                const numHoras = parseInt(prompt('Digite o número de horas trabalhadas: '));
                registrarHoraTrabalhada(idFuncionario, numHoras);
                console.log('Horas registradas com sucesso!\n');
                break;

            case 3:
                gerarRelatorioPagamento();
                break;

            case 4:
                console.log('Saindo...');
                break;

            default:
                console.log('Opção inválida!\n');
                break;
        }
    }
}*/


//gerenciarFolhaPagamento();
