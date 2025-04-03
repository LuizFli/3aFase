import axios from 'axios';


// export const inseriRLivros = livro => {
//     return fetch('https://fakerapi.it/api/v1/books', 
//         {
//             method: 'POST',
//             body : livro
//         }
//     ).then(response => {
//         // console.log(response)
//         return response.data.data
// });
// }


export const buscarLivros = () => {

    return axios.get('https://fakerapi.it/api/v1/books').then(response => {
        // console.log(response)
        return response.data.data
});
   
}
export const inserirLivros = livro => {
    return axios.post('https://fakerapi.it/api/v1/books', livro).then(response => {
        // console.log(response)
        return response.data.data
});
}

export const atualizarLivros = livro => {
    return axios.put('https://fakerapi.it/api/v1/books', livro).then(response => {
        // console.log(response)
        return response.data.data
});
}
export const excluirLivros = id => {
    return axios.delete(`https://fakerapi.it/api/v1/books'${id}`)
    .then(response => response.data.data)
}