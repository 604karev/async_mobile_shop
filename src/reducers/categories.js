import {
    FETCH_CATEGORIES_SUCCESS
} from "../actions/actionsType";
import * as R from 'ramda'

const initialState = {};
export default (state = initialState, {type, payload}) => {

    switch (type) {
        case FETCH_CATEGORIES_SUCCESS:
            const newValue = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newValue);

        default:
            return state
    }

}