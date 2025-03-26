import axios from 'axios'

// export const buscarFilmes = () => {

//     return fetch('http://localhost:9090/acervo/filme')
//     .then(response => response.json())

        
// }

export const buscarFilmes = () => {

    return axios.get('http://localhost:9090/acervo/filme')
    .then(response => response.data);

        
}