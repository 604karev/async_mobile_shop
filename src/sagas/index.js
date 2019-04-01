import {put, takeLatest, all} from 'redux-saga/effects';
import {
    FETCH_PHONES_FAILURE,
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS
} from "../actions/actionsType";

function* fetchPhones() {
    try {
        const json = yield fetch('./mockPhones.json');
        const phones = yield json.json();
        yield put({type: FETCH_PHONES_SUCCESS, payload: phones,});
    }
    catch (error) {
        yield put({type: FETCH_PHONES_FAILURE, payload: error, error: true});
    }
}

function* actionWatcher() {
    yield takeLatest(FETCH_PHONES_START, fetchPhones)
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}