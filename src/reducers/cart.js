import {
    ADD_PHONE_TO_CART
} from '../actions/actionsType';
import * as R from 'ramda';

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PHONE_TO_CART:
            return R.append(payload, state);
        default:
            return state
    }

}