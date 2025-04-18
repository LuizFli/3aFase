//Objetivo: Dado um array de objetos com produtos, retornar um novo array com o nome e o preço com 10% de desconto.

const produtos = [
  { nome: 'Camiseta', preco: 50 },
  { nome: 'Calça', preco: 80 },
  { nome: 'Tênis', preco: 120 }
];
const resultado = produtos.map(produto => {
    const desconto = produto.preco*0.90
    return{
        nome:produto.nome,
        precoComDesconto:desconto
    }
})
console.log(resultado)
// Resultado esperado:
// [
//   { nome: 'Camiseta', precoComDesconto: 45 },
//   { nome: 'Calça', precoComDesconto: 72 },
//   { nome: 'Tênis', precoComDesconto: 108 }
// ]
