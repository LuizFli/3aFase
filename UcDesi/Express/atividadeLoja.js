/*Temos um **carrinho de compras** com vários pedidos. Cada pedido tem:

- o **nome do cliente**
- o **valor**
- o **tipo de pagamento** (cartão, boleto, pix, cripto)

Vamos:

1. Filtrar só pedidos com valor acima de R$100 (com `filter`)
2. Mapear os pedidos para preparar os dados (`map`)
3. Processar os pagamentos com `forEach`, usando **callbacks diferentes** */
const pedidos = [
    { cliente: "Ana", valor: 150.00, tipo: "cartao" },
    { cliente: "Bruno", valor: 89.90, tipo: "boleto" },
    { cliente: "Carla", valor: 120.00, tipo: "pix" },
    { cliente: "Diego", valor: 250.00, tipo: "cripto" },
    { cliente: "Erica", valor: 45.00, tipo: "cartao" },
];

const pagarComCartao = (pedido) => {
    console.log(`💳 ${pedido.cliente} pagou R$${pedido.valor.toFixed(2)} com cartão de crédito.`);
};

const pagarComBoleto = (pedido) => {
    console.log(`📄 Boleto gerado para ${pedido.cliente} no valor de R$${pedido.valor.toFixed(2)}.`);
};

const pagarComPix = (pedido) => {
    console.log(`⚡ ${pedido.cliente} pagou R$${pedido.valor.toFixed(2)} via PIX.`);
};

const pagarComCripto = (pedido) => {
    console.log(`🪙 ${pedido.cliente} pagou com cripto, equivalente a R$${pedido.valor.toFixed(2)}.`);
};
//EXEMPLO 1 ------------------------------------

// function tratamentoPedidos(pedidos) {
//     const filtrarPedidos = pedidos.filter(pedido => {
//         return pedido.valor > 100
//     })
//     const pedidosFiltrados = filtrarPedidos.map((pedido) => {
//         switch (pedido.tipo) {
//             case 'cartao':
//                 pedido.callback = pagarComCartao
//                 break;
//             case 'boleto':
//                 pedido.callback = pagarComBoleto
//                 break;
//             case 'pix':
//                 pedido.callback = pagarComPix
//                 break;
//             case 'cripto':
//                 pedido.callback = pagarComCripto
//                 break;
//             default:
//                 console.log(`Tipo de Pagamento não suportado pelo sistema "${pedido.tipo}"`)
//                 break;
//         }
//         return pedido;
//     })
//     return pedidosFiltrados
// };
// console.log(tratamentoPedidos(pedidos))
// const retornoFuntion = tratamentoPedidos(pedidos)
//    retornoFuntion.forEach(pedido => {
//     pedido.callback(pedido)
// });

//EXEMPLO 2 ----------------------------------------------
// const filtrarValor = pedidos.filter(pedido => {
//     return pedido.valor < 151
// }) 
// const pedidosFiltrados = filtrarValor.map(pedido => {
//     switch (pedido.tipo) {
//         case 'cartao':
//             pedido.callback = pagarComCartao
//             break;
//         case 'boleto':
//             pedido.callback = pagarComBoleto
//             break;
//         case 'pix':
//             pedido.callback = pagarComPix
//             break;
//         case 'cripto':
//             pedido.callback = pagarComCripto
//             break;
//         default:
//             console.log(`Tipo de Pagamento não suportado pelo sistema "${pedido.tipo}"`)
//             break;
//     }
//     return pedido;
// })
// pedidosFiltrados.forEach(pedido => {
//     pedido.callback(pedido)
// })
// console.log(pedidosFiltrados)

//EXEMPLO 3 --------------------------------------------

// const processadoresPagamento = {
//     cartao: ({ cliente, valor }) => { console.log(`💳   ${cliente} pagou R$${valor.toFixed(2)} com cartão de crédito.`); },
//     boleto: ({ cliente, valor }) => { console.log(`📄    Boleto gerado para ${cliente} no valor de R$${valor.toFixed(2)}.`) },
//     pix: ({ cliente, valor }) => { console.log(`⚡   ${cliente} pagou R$${valor.toFixed(2)} via PIX.`) },
//     cripto: ({ cliente, valor }) => { console.log(`🪙    ${cliente} pagou com cripto, equivalente a R$${valor.toFixed(2)}.`) }
// };
// const filtrarValor = pedidos.filter(pedido => {
//     return pedido.valor > 100
// })
// const pedidosProcessados = filtrarValor.map(pedido => {
//     return {
//         ...pedido,
//         callback: processadoresPagamento[pedido.tipo]
//     };
// })
// pedidosProcessados.forEach(pedido => {
//     pedido.callback(pedido)
// })

//CORREÇÂO PROFESSOR --------------------









