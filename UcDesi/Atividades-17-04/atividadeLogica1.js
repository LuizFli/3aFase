// Você recebeu um array com dados de funcionários de uma empresa. Cada funcionário tem:
// nome
// idade
// salário
// ativo (boolean)
// Seu objetivo é gerar um relatório final com os nomes dos funcionários ativos, com salários ajustados com bônus de 10%, e exibir uma mensagem personalizada no console para cada um.
// 🧪 Requisitos:
// Filtrar apenas os funcionários ativos
// Mapear os funcionários para aplicar um bônus de 10% no salário
// ForEach para exibir no console uma mensagem do tipo:
// Parabéns, João! Seu novo salário com bônus é R$5500.00
// ​
// 📥 Dados de entrada:
const funcionarios = [
    { nome: 'João', idade: 30, salario: 5000.56, ativo: true },
    { nome: 'Ana', idade: 22, salario: 3200.34, ativo: false },
    { nome: 'Carlos', idade: 28, salario: 4000.23, ativo: true },
    { nome: 'Marina', idade: 35, salario: 6000.99, ativo: false },
    { nome: 'Fernanda', idade: 25, salario: 3800.54, ativo: true }
];
const resultado = funcionarios.filter(funcionario => funcionario.ativo == true)
            .map(funcionario =>  ({...funcionario,salario: funcionario.salario * 1.1}));
            resultado.forEach(({ nome, salario }) => {console.log(`Parabéns, ${nome} Seu novo salário com bônus é R$${(salario).toFixed(2)}`)});
            const totalSalarios = resultado.reduce((total, funcionario) => {
                return total + funcionario.salario;
            }, 0).toFixed(2);

            console.log(totalSalarios);
// Resultado Esperado (no console):
// Parabéns, João! Seu novo salário com bônus é R$5500.00
// Parabéns, Carlos! Seu novo salário com bônus é R$4400.00
// Parabéns, Fernanda! Seu novo salário com bônus é R$4180.00