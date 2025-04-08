import axios from "axios";

import * as paths from './paths';

const BASE_URL = paths.acervoApi;

class FilmeAPI {
    buscarFilmes() {
        return fetch(`${BASE_URL}/filme`, {method: 'GET'})
            .then(response => { 
                console.log(response); 
                return response.json()
            });
        /*return axios.get(`${BASE_URL}/filme`)
            .then(response => {
                console.log("Response Axios: ", response);
                return response.data;
            });
    }*/
}

    async buscarFilmePorId(id) {
        const response = await axios.get(`${BASE_URL}/filme/${id}`)
            //.then(response => response.data);
        return response.data;
    }

    excluirFilme(id) {
        return axios.delete(`${BASE_URL}/filme/${id}`)
    }

    inserirFilme(filme) {
        axios.post(`${BASE_URL}/filme`, filme)
    }

    atualizarFilme(filme) {
        axios.put(`${BASE_URL}/filme`, filme)
    }
}

const FilmeService = new FilmeAPI();

export default FilmeService;

export const buscarFilmes = () => {
    return axios.get(`${BASE_URL}/filme`)
            .then(response => response.data);
}
