import * as api from '../api/index.js';

export const getProduct = id => async (dispatch) => {
    const { product } = await api.fetchProduct(id);
    dispatch({ type: "FETCH_PRODUCT", payload: { product } });
}

export const getProducts = category => async (dispatch) => {
    const { category: { products } } = await api.fetchProducts(category);
    dispatch({ type: "FETCH_PRODUCTS", payload: { products } });
}

export const getCurrencies = () => async (dispatch) => {
    const { currencies } = await api.fetchCurrencies();
    dispatch({ type: "FETCH_CURRENCIES", payload: { currencies }});
}

