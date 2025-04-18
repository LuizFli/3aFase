//Objetivo: Some todos os números de um array e mostre o total no final.
const numeros = [10, 20, 30];
const resultado = numeros.reduce((Total,valorAtual) => {
    return Total+valorAtual
},0)
console.log(`Total: ${resultado}`)
// Resultado esperado no console:
// Total: 60
