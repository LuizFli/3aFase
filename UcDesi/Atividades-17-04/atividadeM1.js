//Objetivo: Dado um array de nomes, retornar um novo array com todos os nomes em letras maiúsculas.
const nomes = ['ana', 'bruno', 'carla'];

const resultado = nomes.map(nome => nome.toUpperCase())
console.log(resultado)
// Resultado esperado: ['ANA', 'BRUNO', 'CARLA']