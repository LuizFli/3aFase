import { all, takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import * as types from './types';
import FilmeAPI from '../../services/filme';
import { buscarFilmes, setarFilmeAtual } from './actions';

function* workerBuscarFilmes(action) {
    console.log("Action no worker", action);
    const filmes = yield call(FilmeAPI.buscarFilmes);
    console.log("Filmes no worker: ", filmes);
    yield put({type: types.ARMAZENAR_FILMES, payload: filmes})
}

function* buscarFilmePorId(action) {
    console.log("Action no worker de buscar por ID ", action);
    const filme = yield call(FilmeAPI.buscarFilmePorId, action.payload);
    //yield put({type: types.SETAR_FILME_ATUAL, payload: filme});
    yield put(setarFilmeAtual(filme));
}

function* excluirFilme(action) {
    console.log("Action no saga de excluir filme: ", action)
    yield call(FilmeAPI.excluirFilme, action.payload.id);
    yield put({type: types.BUSCAR_FILMES});
    //yield put(buscarFilmes())
}

function* watchBuscarFilmes() {
    yield takeLatest(types.BUSCAR_FILMES, workerBuscarFilmes);
}

function* watchBuscarFilmePorId() {
    yield takeLatest(types.BUSCAR_FILME_POR_ID, buscarFilmePorId)
}

function* watchExcluirFilme() {
    yield takeEvery(types.EXCLUIR_FILME, excluirFilme);
}

export default function* filmeSaga() {
    yield all([
        watchBuscarFilmes(),
        watchBuscarFilmePorId(),
        watchExcluirFilme()
    ])
}