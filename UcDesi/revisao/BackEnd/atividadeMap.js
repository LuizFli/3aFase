// 1) ------------------------------------------

// const comissao = [10000, 5000, 8000, 6000, 9000];

// const resultado = comissao.map((comissao) => {

//     return comissao * 0.1


// });
// console.log("Resultado 1) : ", resultado);

//------------------------------------------
const vendas = [10000, 5000, 8000, 6000, 9000];

function cauculaComissao(valor) {
    const comissao = valor * 0.1;

    console.log(`A venda de : ${valor} teve uma comissão de : ${comissao}`);
}

vendas.forEach((vendas) => {
    cauculaComissao(vendas);

});



// 2) ------------------------------------------

const nomeCorredores = ["João", "Marcos", "Maria", "Bruno", "Heitor", "Joaquina"];
// let medalha = ""

// const resultado2 = nomeCorredores.map((corredores,index) => {

//     switch (index) {
//         case 1:
//             medalha = "Ouro"

//             break;
//         case 2:
//             medalha = "Prata"

//             break;
//         case 3:
//             medalha = "Bronze"

//             break;

//         default:
//             medalha = "Sem Medalha"

//             break;
//     }


//     return{nome: corredores, medalha: medalha , posição: index + 1}


// });
// console.log("Resultado 2) : ", resultado2);
//-------------------------------------------------


// function premiacaoMedalha(nome, index) {
//     let medalha = "";

//     switch (index) {
//         case 0:
//             medalha = "Ouro";
//             break
//         case 1:
//             medalha = "Prata";
//             break
//         case 2:
//             medalha = "Bronze";
//             break
//         default:
//             medalha = "Sem Medalha";
//             break
//     }
//     console.log(`nome: ${nome} medalha: ${medalha} posição: ${index + 1}`);

// }
// nomeCorredores.forEach((corredores, index) => {

//     premiacaoMedalha(corredores, index);


// })

// const nomeCorredores = ["João", "Marcos", "Maria", "Bruno", "Heitor", "Joaquina"];
const medalhas = ["ouro", "prata", "bronze", "Sem Medalha"];
const resultado2 = nomeCorredores.map((Corredor,index) => {

    return {
        Nome: Corredor,
        Medalha: index <=2 ? medalhas[index] : medalhas[3],
        Posição: index + 1
    }
});
console.log("Resultado 2) : ", resultado2);

// 2) ------------------------------------------

// function entregaMedalha(nome, posicao) {
//     let medalha

//     switch (posicao) {
//         case 1:
//             medalha = "Ouro"
//             break;
//         case 2:
//             medalha = "Prata"
//             break;
//         case 3:
//             medalha = "Bronze"
//             break;
//         default:
//             medalha = "Sem Medalha"
//             break;
//     }
//     return {
//         "Nome": nome,
//         "Medalha": medalha,
//         "Posição" : posicao
//     }
// }
// const corredores = nomeCorredores.map((corredores, index) => {
//     return entregaMedalha(corredores, index +1);
// });

// console.log("corredores: ", corredores);



