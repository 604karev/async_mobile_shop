import {fetchPhonesAPI} from 'api'

export const fetchPhones = () =>  async dispatch => {
    dispatch({type: 'FETCH_PHONES_START'});
    try {
        const phones = await fetchPhonesAPI();
        dispatch({
            type: 'FETCH_PHONES_SUCCESS',
            payload: phones,

        })
    }
    catch (err) {
        dispatch({
            type: 'FETCH_PHONES_FAILURE',
            payload: err,
            error: true
        })

    }
};

