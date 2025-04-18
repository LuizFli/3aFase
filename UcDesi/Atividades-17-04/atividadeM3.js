//Objetivo: Filtrar apenas os nomes que começam com a letra "A".
const nomes = ['ana', 'Bruno', 'amanda', 'Carlos'];
const resultado = nomes.filter(nome => nome[0].toUpperCase()==='A')
                       .map(nome => nome[0].toUpperCase() + nome.slice(1).toLowerCase());
console.log(resultado)
// Resultado esperado: ['Ana', 'Amanda']

//nome[0].toUpperCase(): Pega a primeira letra e coloca em maiúscula 
//+ nome.slice(1).toLowerCase(): Pega o resto do nome (a partir da segunda letra) e coloca tudo em minúscula.