import axios from "axios";

/*export const buscarFilmes = ()  => {
    return fetch("http://localhost:9090/acervo/filme")
        .then(response => response.json());
}*/

/*export const inserirFilme = (filme)  => {
    return fetch("http://localhost:9090/acervo/filme",
        {
            method: "POST",
            body: filme
        }
    )
        .then(response => response.json());
}*/

export const buscarGeneros = ()  => {
    console.log("Carregando Gêneros")
    return [
        {
            id: 1,
            descricao: "Terror"
        },
        {
            id: 2,
            descricao: "Ficção Científica"
        },
        {
            id: 3,
            descricao: "Comédia"
        },
        {
            id: 4,
            descricao: "Ação"
        },
        {
            id: 5,
            descricao: "Aventura"
        }
    ]
}
