import * as R from 'ramda'

export const fetchPhonesAPI = async () => {
    const response = await fetch("./mockPhones.json");
    return await response.json();
};
export const loadMorePhonesAPI = async ({offset}) => {
    const response = await fetch("./mockPhones.json");
    return await response.json();
};
export const fetchPhoneByIdAPI = async id => {
    const response = await fetch("../mockPhones.json");
    const phone = await response.json();
    return await R.find(R.propEq('id', id), phone)
};