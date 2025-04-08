import axios from "axios";

const BASE_URL = "http://localhost:9090/acervo";

export const listarFilmes = () => {
    return fetch(`${BASE_URL}/filme`, {
        method: 'GET'
    }).then(response => {
        console.log("Status", response  );
        return response.json()
    });
}

export const listarFilmesComAxios = () => {
    return axios.get("http://localhost:9090/acervo/filme")
        .then(response => {
            console.log("Status", response  );
            return response.data
    });
}