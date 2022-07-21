import * as api from '../api/index.js';

export const getProduct = (id) => async (dispatch) => {
    const response = await api.fetchProduct(id);
    const data = await response.json();
    console.log("actions")
    console.log(data);
    dispatch({ type: "FETCH_PRODUCT", payload: { product: data } });
}