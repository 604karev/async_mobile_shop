import {
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_FAILURE,
    LOAD_MORE_PHONES_START,
    LOAD_MORE_PHONES_SUCCESS,
    LOAD_MORE_PHONES_FAILURE,
    FETCH_PHONE_BY_ID_START,
    FETCH_PHONE_BY_ID_SUCCESS,
    FETCH_PHONE_BY_ID_FAILURE,
    ADD_PHONE_TO_CART,
    SEARCH_PHONE,
    GET_NEWS, FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE
} from './actionsType';

import {getRenderedPhonesLeight} from 'selectors';
import {
    fetchPhonesAPI,
    loadMorePhonesAPI,
    fetchPhoneByIdAPI,
    fetchCategoriesAPI
} from 'api';


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
            type: FETCH_PHONE_BY_ID_FAILURE,
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

export const searchPhone = text => dispatch => {
    dispatch({
        type: SEARCH_PHONE,
        payload: text
    })
};

export const fetchNews = () => ({
    type: GET_NEWS,
});

export const fetchCategories = () => async dispatch => {
    dispatch({type: FETCH_CATEGORIES_START});

    try {
        const categories = await fetchCategoriesAPI();
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: categories,

        })
    }
    catch (err) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: err,
            error: true
        })

    }
};
