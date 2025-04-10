

// Atividade para quinta
// crie uma funcao que receba por paramentro um callback, onde espera receber um parametro de objeto que contenha o nome, a disciplina e a idade do aluno.
// As funcoes de callback serao 3, uma funcao apresenta o nome do aluno (console.log), uma outra trabalha com a idade do aluno e a 3 trabalha em qual disciplina aquele aluno esta estudando.


const aluno = {
    nome: "Luiz Filipe",
    disciplina: "Matemática",
    idade: 28
}

const principal = callback => {

    callback(aluno)
}
//-----------
const nomeAluno = () => {
    console.log(`O nome do aluno : ${aluno.nome}`)
    
}
//---------
const disciplinaAluno = () => {
    console.log(`A Diciplina do aluno : ${aluno.disciplina}`)
    
}
//------------
const idadeAluno = () => {
    console.log(`A idade do aluno : ${aluno.idade}`)
    
}

principal(nomeAluno)
principal(disciplinaAluno)
principal(idadeAluno)