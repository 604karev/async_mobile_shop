import * as R from 'ramda'

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = (state) => {
    const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids);
    return phones
};

export const getRenderedPhonesLeight = state => R.length(state.phonesPage.ids);

export const getTotalCartCount = state => R.length(state.cart);

export const getTotalPrice = state => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
        R.map(id => getPhoneById(state, id))
    )(state.cart);

    return totalPrice

};