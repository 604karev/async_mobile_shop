
export const fetchPhonesAPI = async () => {
    const response = await fetch("./mockPhones.json");
    return await response.json();
};