import {
    FETCH_PHONE_BY_ID_FAILURE,
    FETCH_PHONE_BY_ID_START,
    FETCH_PHONE_BY_ID_SUCCESS,
    FETCH_PHONES_FAILURE,
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
} from '../actions/actionsType'


const initialState = null;
export default (state = initialState, {type, isFetching}) => {
    switch (type) {
        case FETCH_PHONES_START:
            return isFetching;
        case FETCH_PHONES_SUCCESS:
            return isFetching;
        case FETCH_PHONES_FAILURE:
            return isFetching;
        case FETCH_PHONE_BY_ID_START:
            return isFetching;
        case FETCH_PHONE_BY_ID_SUCCESS:
            return isFetching;
        case FETCH_PHONE_BY_ID_FAILURE:
            return isFetching;
        default:
            return state
    }

}