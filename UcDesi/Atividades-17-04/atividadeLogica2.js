// Você tem uma lista de produtos de um mercado. Cada produto tem:
// nome
// categoria
// preco
// estoque (quantidade em estoque)
// 🧪 Objetivo:
// Filtrar os produtos com estoque menor que 10 unidades
// Mapear para criar um novo array com os nomes e preços com 15% de desconto
// forEach para exibir um alerta no console:
// fazer todos os metodos encadeados.
// 📥 Dados:

const produtos = [
  { nome: 'Arroz', categoria: 'Alimento', preco: 25, estoque: 5 },
  { nome: 'Feijão', categoria: 'Alimento', preco: 10, estoque: 15 },
  { nome: 'Sabonete', categoria: 'Higiene', preco: 3, estoque: 8 },
  { nome: 'Detergente', categoria: 'Limpeza', preco: 4, estoque: 3 },
  { nome: 'Papel Higiênico', categoria: 'Higiene', preco: 12, estoque: 20 }
];

produtos
        .filter(produto => produto.estoque<10)
        .map(produto => {return {...produto,preco:produto.preco*0.85}})
        .forEach(({nome, preco})=> console.log(`Estoque baixo: Produto ${nome} - Novo Preço: R$${(preco).toFixed(2)}`))



// 🔚 Resultado esperado (exemplo):
// Estoque baixo: Produto Arroz - Novo Preço: R$21.25
// Estoque baixo: Produto Sabonete - Novo Preço: R$2.55
// Estoque baixo: Produto Detergente - Novo Preço: R$3.40