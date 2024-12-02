# **Sistema de Folha de Pagamento**

Este projeto é um sistema básico de **folha de pagamento**, desenvolvido com o objetivo principal de aprendizado. Ele permite gerenciar informações de funcionários, calcular salários com base nas horas trabalhadas e gerar relatórios simples de pagamento.

---

## **Funcionalidades**
- **Adicionar Funcionários**: Registre informações como nome, cargo e taxa horária. O ID do funcionário é gerado automaticamente.
- **Registrar Horas Trabalhadas**: Registre as horas trabalhadas por cada funcionário com base no ID.
- **Calcular Salários**: Realize cálculos automáticos do salário bruto, descontos de INSS e salário líquido.
- **Gerar Relatórios de Pagamento**: Exiba relatórios detalhados com todas as informações do pagamento de cada funcionário.
- **Listar Funcionários**: Veja uma lista com as informações básicas de todos os funcionários registrados, como ID, nome e cargo.

---

## **Como Rodar o Projeto**

1. **Instale o Node.js** se ainda não tiver: [Download Node.js](https://nodejs.org/)
2. **Clone este repositório**:
   ```bash
   git clone https://github.com/ruhanrmacedo/folha-de-pagamento
   ```
3. **Entre na pasta do projeto**:
   ```bash
   cd sistema-folha-pagamento
   ```
4. **Instale a dependência necessária**:
   ```bash
   npm install
   ```
5. **Execute o programa:
   ```bash
   npm run dev
   ```
## **Fluxo de Execução**
Ao executar o programa, você verá o menu principal com as seguintes opções:
- **1 - Adicionar Funcionários**: Insira o nome, cargo e taxa horária do funcionário. O sistema gerará um ID único automaticamente.
- **2 - Registrar Horas Trabalhadas**: Insira o ID do funcionário e o número de horas trabalhadas para registrar no sistema.
- **3 - Exibir relatório de pagamento:**: Gere um relatório detalhado com as informações de pagamento, incluindo horas trabalhadas, salário bruto, desconto de INSS e salário líquido.
- **4 - Exibir lista de funcionários:**: Liste todos os funcionários registrados com informações básicas, como ID, nome e cargo.
- **5 - Sair**: Encerra o programa.

## **Possíveis Melhorias Futuras**
- Persistência de Dados: Salvar as informações em um arquivo ou banco de dados.
- Exportação de Relatórios: Permitir gerar relatórios em PDF ou CSV.
- Interface Gráfica: Criar uma interface amigável para facilitar o uso.
- Autenticação: Adicionar autenticação para proteger os dados dos funcionários.

