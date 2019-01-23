import * as R from 'ramda'

const getPhonesById = (state, id) => R.prop(id, state.phones);

export const getPhones = state => {
    return R.map(id => getPhonesById(state, id), state.phonesPage.ids)

};
