import {
    ADD_PHONE_TO_CART, CLEAR_CART, REMOVE_PHONE_FROM_CART
} from '../actions/actionsType';
import * as R from 'ramda';

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PHONE_TO_CART:
            return R.append(payload, state);
        case REMOVE_PHONE_FROM_CART:
            return R.without(R.of(payload), state);
        case CLEAR_CART:
            return [];
        default:
            return state
    }

}