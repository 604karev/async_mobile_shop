import * as R from 'ramda'

const getPhonesById = (state, id) => R.prop(id, state.phones);

export const getPhones = (state) => {
    const phones = R.map(id => getPhonesById(state, id), state.phonesPage.ids);

    return phones
};
export const getRenderedPhonesLeight = state => R.length(state.phonesPage.ids);