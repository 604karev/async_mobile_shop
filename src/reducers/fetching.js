import {
    FETCH_PHONES_FAILURE,
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
} from '../actions/actionsType'
import * as R from 'ramda'


const initialState = {
    isFetching: null
};
export default (state = initialState, {type, isFetching}) => {
    switch (type) {
        case FETCH_PHONES_START:
            return R.merge(state, {isFetching: isFetching});
        case FETCH_PHONES_SUCCESS:
            return R.merge(state, {isFetching: isFetching});
        case FETCH_PHONES_FAILURE:
            return R.merge(state, {isFetching: isFetching});

        default:
            return state
    }

}