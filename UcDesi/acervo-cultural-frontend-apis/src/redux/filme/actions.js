import * as types from './types';

//import FilmeAPI from '../../services/filme';

/* Redux - Sozinho */
export const armazenarFilmes = filmes => ({
    type: types.ARMAZENAR_FILMES,
    payload: filmes
});

export const setarFilmeAtual = filme => ({
    type: types.SETAR_FILME_ATUAL,
    payload: filme
});
/* */

/* Redux com Thunk */
/* export const buscarFilmes = () => async dispatch => {
    const filmes = await FilmeAPI.buscarFilmes();
    console.log("Filmes na Action: ", filmes);
    dispatch(armazenarFilmes(filmes));
    //dispatch({type: types.ARMAZENAR_FILMES, payload: filmes})
}

export const buscarFilmePorId = id => async dispatch => {
    const filme = await FilmeAPI.buscarFilmePorId(id);
    console.log("Filme na Action: ", filme)
    //setFilme(filme);
    dispatch(setarFilmeAtual(filme));
} */
/* */

/* Redux Saga */
export const buscarFilmes = () => (
    { type: types.BUSCAR_FILMES }
);

export const buscarFilmePorId = id => (
    { type: types.BUSCAR_FILME_POR_ID, payload: id }
);

export const excluirFilme = filme => (
    { type: types.EXCLUIR_FILME, payload: filme }
);
/* */