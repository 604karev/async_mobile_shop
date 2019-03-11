import {
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_FAILURE,
    LOAD_MORE_PHONES_START,
    LOAD_MORE_PHONES_SUCCESS,
    LOAD_MORE_PHONES_FAILURE,
    FETCH_PHONE_BY_ID_START,
    FETCH_PHONE_BY_ID_SUCCESS,
    FETCH_PHONE_BY_ID_FAILTURE,
    ADD_PHONE_TO_CART
} from './actionsType';

import {getRenderedPhonesLeight} from 'selectors';
import {fetchPhonesAPI, loadMorePhonesAPI, fetchPhoneByIdAPI} from 'api';


export const fetchPhones = () => async dispatch => {
    dispatch({type: FETCH_PHONES_START});
    try {
        const phones = await fetchPhonesAPI();
        dispatch({
            type: FETCH_PHONES_SUCCESS,
            payload: phones,

        })
    }
    catch (err) {
        dispatch({
            type: FETCH_PHONES_FAILURE,
            payload: err,
            error: true
        })

    }
};

export const loadMorePhones = () => async (dispatch, getState) => {

    const offset = getRenderedPhonesLeight(getState());

    dispatch({type: LOAD_MORE_PHONES_START});
    try {
        const phones = await loadMorePhonesAPI({offset});
        dispatch({
            type: LOAD_MORE_PHONES_SUCCESS,
            payload: phones,

        })
    }
    catch (err) {
        dispatch({
            type: LOAD_MORE_PHONES_FAILURE,
            payload: err,
            error: true
        })

    }
};

export const fetchPhoneById = id => async (dispatch) => {
    dispatch({type: FETCH_PHONE_BY_ID_START});

    try {
        const phone = await fetchPhoneByIdAPI(id);

        dispatch({
            type: FETCH_PHONE_BY_ID_SUCCESS,
            payload: phone,
        })
    }

    catch (err) {
        dispatch({
            type: FETCH_PHONE_BY_ID_FAILTURE,
            payload: err,
            error: true
        })
    }
};

export const addPhoneToCart = (id) => dispatch => {
    dispatch({
        type: ADD_PHONE_TO_CART,
        payload: id
    })
};