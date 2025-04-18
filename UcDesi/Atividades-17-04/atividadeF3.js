//Objetivo: Dado um array de idades, filtre e retorne apenas as idades maiores ou iguais a 18.
const idades = [12, 18, 21, 14, 30];
const resultado = idades.filter(idade => idade>=18);
console.log(resultado)
// Resultado esperado: [18, 21, 30]