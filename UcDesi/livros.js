import axios from "axios"

export const buscarLivros = () =>{
    return axios.get("https://fakerapi.it/api/v1/books", {
     }).then(response => response.data);
}

