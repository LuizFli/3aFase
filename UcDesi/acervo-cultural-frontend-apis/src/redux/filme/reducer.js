import * as types from './types';

const ESTADO_INICIAL = {
    filmes: []
}

const FilmeReducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
        case types.ARMAZENAR_FILMES: {
            console.log('State no Redux:', state);
            console.log('Payload no Redux:', action.payload);
            return { ...state, filmes: action.payload }
        }
        case types.SETAR_FILME_ATUAL: {
            console.log('State no Redux:', state);
            console.log('Payload no Redux:', action.payload);
            return { ...state, filmeEmEdicao: action.payload }
        }
        default:
            return state
    }
}

export default FilmeReducer;