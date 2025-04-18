//Objetivo: Dado um array de produtos, filtre aqueles com preço acima de R$100 e que estejam disponíveis (disponivel: true).

const produtos = [
    { nome: 'Notebook', preco: 3000, disponivel: true },
    { nome: 'Mouse', preco: 50, disponivel: true },
    { nome: 'Teclado', preco: 150, disponivel: false },
    { nome: 'Monitor', preco: 500, disponivel: true }
];
const resultado = produtos.filter(produto => produto.preco > 100 && produto.disponivel == true)
                          .map(produto => {return {...produto}})
console.log(resultado)
// Resultado esperado:
// [
//   { nome: 'Notebook', preco: 3000, disponivel: true },
//   { nome: 'Monitor', preco: 500, disponivel: true }
// ]