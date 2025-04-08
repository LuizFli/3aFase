// const vendas = [1780, 1895, 1900, 2100, 2765, 3910, 1599, 2400]

// const resultado = vendas.filter(venda => {
//     return venda >= 1900;
// })

// console.log("Vendas : " , vendas)
// console.log("Resultado : ", resultado);

// const resultadoMap = vendas.map(venda => {

//     return venda >= 1900 ? venda : 0;

// })
// console.log("Resultado Map : ", resultadoMap);

//3) -------------------------------------

const medias = [
    { nome: "João", nota: 5 },
    { nome: "Marcos", nota: 8 },
    { nome: "Maria", nota: 6 },
    { nome: "Bruno", nota: 9 },
    { nome: "Kleber", nota: 10 },
    { nome: "Josue", nota: 7 },
    { nome: "Julia", nota: 5 },
    { nome: "Pilar", nota: 8 },
    { nome: "Robert", nota: 6 },
    { nome: "Gçauber", nota: 9 }
];

// const aprovados = medias.filter(aluno => {

//     return aluno.nota >= 7;
// })
// const reprovados = medias.filter(aluno => {

//     return aluno.nota < 7;
// })

// console.log("Aprovados : ", aprovados);
// console.log("Reprovados : ", reprovados);

// const resultadoif = medias.filter(aluno => {

//     if (aluno.nota >= 7) {
//         aluno.situacao = "Aprovado"
//     } else {
//         aluno.situacao = "Reprovado"
//     }
//     return aluno;
// })

// const resultado = medias.filter(aluno => {

//     aluno.situacao = aluno.nota >= 7 ? "Aprovado" : "Reprovado";

//     return aluno;
// })
// console.log("Resultado : ", resultado);


// 4) -------------------------------------

const pacientes = [
    { nome: "João", tipoSangue: "AB", status: "internado" },
    { nome: "Marcos", tipoSangue: "A", status: "internado" },
    { nome: "Maria", tipoSangue: "B", status: "alta" },
    { nome: "Thiago", tipoSangue: "O", status: "internado" },
    { nome: "Bruno", tipoSangue: "B", status: "internado" },
    { nome: "Kleber", tipoSangue: "A", status: "internado" },
    { nome: "Joo", tipoSangue: "O", status: "observação" },
    { nome: "Mars", tipoSangue: "O", status: "internado" },
    { nome: "Mara", tipoSangue: "A", status: "internado" },
    { nome: "Tigo", tipoSangue: "AB", status: "alta" },
    { nome: "Buno", tipoSangue: "AB", status: "observação" },
]
const estoque = { A: 2, B: 1, AB: 0, O: 6 }


// function tipoSangue(pacientes, estoque) {


//     const internados = pacientes.filter(paciente => {
//         return paciente.status === "internado"
//     })

//     const resultado = internados.map(internado => {

//         switch (internado.tipoSangue) {
//             case "A":

//                 if (estoque.A > 0) {
//                     estoque.A--;
//                     internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} foi atendido com sucesso, Sangue A do estoque foi utilizado! ${estoque.A} unidades restantes!`
//                     return internado;
//                 }

//                 if (estoque.O > 0) {
//                     estoque.O--;
//                     internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} foi atendido com sucesso, Sangue O do estoque foi utilizado! ${estoque.O} unidades restantes!`
//                     return internado;
//                 }

//                 internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} não foi atendido!`;
//                 return internado;
//             case "B":
//                 if (estoque.B > 0) {
//                     estoque.B--;
//                     internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} foi atendido com sucesso, Sangue B do estoque foi utilizado! ${estoque.B} unidades restantes!`
//                     return internado;
//                 }

//                 if (estoque.O > 0) {
//                     estoque.O--;
//                     internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} foi atendido com sucesso, Sangue O do estoque foi utilizado! ${estoque.O} unidades restantes!`
//                     return internado;
//                 }

//                 internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} não foi atendido!`;
//                 return internado;


//             case "AB":
//                 if (estoque.AB > 0) {
//                     estoque.AB--;
//                     internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} foi atendido com sucesso, Sangue AB do estoque foi utilizado! ${estoque.AB} unidades restantes!`
//                     return internado;
//                 }

//                 if (estoque.O > 0) {
//                     estoque.O--;
//                     internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} foi atendido com sucesso, Sangue O do estoque foi utilizado! ${estoque.O} unidades restantes!`
//                     return internado;
//                 }
//                 if (estoque.A > 0) {
//                     estoque.A--;
//                     internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} foi atendido com sucesso, Sangue A do estoque foi utilizado! ${estoque.A} unidades restantes!`
//                     return internado;
//                 }
//                 if (estoque.B > 0) {
//                     estoque.B--;
//                     internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} foi atendido com sucesso, Sangue B do estoque foi utilizado! ${estoque.B} unidades restantes!`
//                     return internado;
//                 }

//                 internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} não foi atendido!`;
//                 return internado;
//             case "O":
//                 if (estoque.O > 0) {
//                     estoque.O--;
//                     internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} foi atendido com sucesso, Sangue O do estoque foi utilizado ${estoque.O} unidades restantes!`
//                 }else{

//                     internado.mensagem = `Paciente ${internado.nome} do tipo ${internado.tipoSangue} não foi atendido!`
//                 }
//                     return internado;


//             default:
//                 console.log("Tipo sanguíneo não encontrado");
//                 break;
//         }
//         return {
//             nome: internado.nome,
//             tipoSangue: internado.tipoSangue,
//             status: internado.status,
//             mensagem: internado.mensagem
//         }
//     })
//     console.log("Resultado : ", resultado);
// }
// tipoSangue(pacientes, estoque);

// ALT

const realizaTransfusao = (pacientes) => {
    const pacientesInternados = pacientes.filter(paciente => {
        return paciente.status === "internado"
    })

    pacientesInternados.forEach(paciente => {

        switch (paciente.tipoSangue) {
            case "A":
                verificaEstoque("A", paciente)
                    break;
            case "B":
                verificaEstoque("B", paciente)
                    break;
            case "AB":
                verificaEstoque("AB", paciente)
                    break;
            case "O":
                verificaEstoque("O", paciente)
                    break;
        }

    })
    console.log("Estoque : ", estoque);

}
const verificaEstoque = (tipoSangue, paciente) => {

    if (estoque[tipoSangue] > 0) {
        estoque[tipoSangue]--
        console.log(`Paciente ${paciente.nome} do tipo ${paciente.tipoSangue} foi atendido com sucesso, Sangue ${tipoSangue} do estoque foi utilizado! ${estoque[tipoSangue]} unidades restantes!`)
    } else {
        console.log(`Paciente ${paciente.nome} do tipo ${paciente.tipoSangue} não foi atendido!`)
    }

    return true;
}
realizaTransfusao(pacientes);

// DEEPSEEK--EXEMPLE --------------------------------------

// const verificaEstoque = (tipoSanguePaciente, paciente) => {
//     // Remove o "+" ou "-" para pegar apenas a letra (A, B, AB, O)
//     const tipoBase = tipoSanguePaciente.replace(/[+-]/g, '');
  
//     // Define os tipos compatíveis (regras simplificadas):
//     const tiposCompatíveis = {
//       "A": ["A", "O"],       // Paciente A pode receber A ou O
//       "B": ["B", "O"],       // Paciente B pode receber B ou O
//       "AB": ["AB", "A", "B", "O"], // Paciente AB pode receber qualquer tipo
//       "O": ["O"]             // Paciente O só pode receber O
//     };
  
//     // Pega os tipos compatíveis do paciente
//     const tiposParaVerificar = tiposCompatíveis[tipoBase];
  
//     // Procura no estoque o PRIMEIRO tipo compatível disponível
//     for (const tipo of tiposParaVerificar) {
//       if (estoque[tipo] > 0) {
//         estoque[tipo]--; // Remove 1 unidade do estoque
//         console.log(`Paciente ${paciente.nome} (${tipoSanguePaciente}) foi atendido com ${tipo}. Restam ${estoque[tipo]} unidades de ${tipo}!`);
//         return true; // Atendido com sucesso
//       }
//     }
  
//     // Se nenhum tipo compatível estiver disponível:
//     console.log(`Paciente ${paciente.nome} (${tipoSanguePaciente}) NÃO PODE SER ATENDIDO! Tipos compatíveis: ${tiposParaVerificar.join(", ")}`);
//     return false;
//   };
// realizaTransfusao(pacientes);



// COPILOT EXemple --------------------------------

// const realizaTransfusao = (pacientes) => {
//     const pacientesInternados = pacientes.filter(paciente => {
//         return paciente.status === "internado"
//     })

//     pacientesInternados.forEach(paciente => {
//         if (estoque[paciente.tipoSangue] > 0) {
//             estoque[paciente.tipoSangue]--;
//             console.log(`Paciente ${paciente.nome} do tipo ${paciente.tipoSangue} foi atendido com sucesso, Sangue ${paciente.tipoSangue} do estoque foi utilizado! ${estoque[paciente.tipoSangue]} unidades restantes!`)
//         } else {
//             console.log(`Paciente ${paciente.nome} do tipo ${paciente.tipoSangue} não foi atendido!`)
//         }
//     })

// }
// realizaTransfusao(pacientes);

