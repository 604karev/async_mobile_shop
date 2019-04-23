import {
    FETCH_PHONES_FAILURE,
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
} from '../actions/actionsType'
import * as R from 'ramda'


const initialState = null;
export default (state = initialState, {type, isFetching}) => {
    switch (type) {
        case FETCH_PHONES_START:
            return isFetching;
        case FETCH_PHONES_SUCCESS:
            return isFetching;
        case FETCH_PHONES_FAILURE:
            return isFetching;

        default:
            return state
    }

}