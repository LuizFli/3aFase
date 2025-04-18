//Objetivo: Dado um array de objetos representando vendas, exiba uma mensagem de agradecimento personalizada para cada cliente que gastou mais de R$100.
const vendas = [
    { cliente: 'João', valor: 80 },
    { cliente: 'Maria', valor: 150 },
    { cliente: 'Pedro', valor: 120 }
];

vendas
    .filter(venda => venda.valor > 100)
    .forEach(({ cliente, valor }) => console.log(`Obrigado pela compra, ${cliente}! Você gastou R$${valor}.`));

// Saída esperada:
// Obrigado pela compra, Maria! Você gastou R$150.
// Obrigado pela compra, Pedro! Você gastou R$120.

