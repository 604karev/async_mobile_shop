import * as R from 'ramda'


export const fetchPhonesAPI = async () => {
    const response = await  fetch("http://www.mocky.io/v2/5cc04341310000440a0361ee?mocky-delay=600ms");
    return await response.json();
};
export const loadMorePhonesAPI = async ({offset}) => {
    const response = await fetch("http://www.mocky.io/v2/5cc04341310000440a0361ee");
    return await response.json();
};
export const fetchPhoneByIdAPI = async id => {
    const phones = await fetch("http://www.mocky.io/v2/5cc04341310000440a0361ee?mocky-delay=600ms");
    const phone = await phones.json();
    return R.find(R.propEq('id', id), phone)
};

export const fetchCategoriesAPI = async () => {
    const response = await fetch("http://www.mocky.io/v2/5cc043b13100007d0e0361f6");
    return await response.json();
};