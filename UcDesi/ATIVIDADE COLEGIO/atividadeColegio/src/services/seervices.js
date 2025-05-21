import axios from 'axios';

export const buscarAlunos = ()  => {
    return axios.get("http://localhost:3000/alunos")
        .then(response => response.data)
        .catch(error => {
            console.error("Erro ao buscar alunos:", error);
            throw error;
        });
}

export const buscarAlunoPorMatricula = matricula  => {
    return axios.get(`http://localhost:3000/alunos/${matricula}`)
        .then(response => response.data)
        .catch(error => {
            console.error("Erro ao buscar aluno:", error);
            throw error;
        });
}


export const inserirAluno = (aluno)  => {
    return axios.post("http://localhost:3000/alunos", aluno)
        .then(response => response.data)
        .catch(error => {
            console.error("Erro ao inserir aluno:", error);
            throw error;
        });
}

export const inserirNotasAluno = (aluno, matricula)  => {
    return axios.post(`http://localhost:3000/alunos/${matricula}/notas`, aluno)
        .then(response => response.data)
        .catch(error => {
            console.error("Erro ao inserir notas", error);
            throw error;
        });
}