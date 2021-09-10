import * as R from 'ramda'

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = (state, ownProps) => {
    const activeCategory = getActiveCategory(ownProps);

    const applySearch = item => R.contains(
        state.phonesPage.search,
        R.prop('name', item)
    );
    const applyCategory = item => R.equals(
        R.prop('categoryId', item),
        activeCategory
    );
    const phones = R.compose(
        R.filter(applySearch),
        R.when(R.always(activeCategory), R.filter(applyCategory)),
        R.map(id => getPhoneById(state, id))
    )(state.phonesPage.ids);
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

export const getCategories = state => R.values(state.categories);

export const getActiveCategory = ownProps => R.path(['match', 'params', 'id'], ownProps);

export const getBasketPhones = state => {
    const uniqueIds = R.uniq(state.cart);

    const phoneCount = id => R.compose(
        R.length,
        R.filter(basketId => R.equals(id, basketId))
    )(state.cart);

    const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone);
    return R.compose(
        R.map(phoneWithCount),
        R.map((id) => getPhoneById(state, id))
    )(uniqueIds)
};