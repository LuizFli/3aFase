import axios from 'axios';

export const buscarLivros = () => {

    return axios.get('https://fakerapi.it/api/v1/books?_locale=pt_BR&_quantity=15').then(response => response.data);
   
        
}