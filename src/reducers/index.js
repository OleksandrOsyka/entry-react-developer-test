import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';

function addToCart(state, action) {
  //Check if the item is already in cart
  const index = state.cart.findIndex((item) => {
    return (
      item.product.id === action.payload.product.id &&
      _.isEqual(item.selectedAttributes, action.payload.selectedAttributes)
    );
  });
  
  //If the item already exists in cart, update quantity
  if (index !== -1) {
    return [
      ...state.cart.slice(0, index),
      {
        ...state.cart[index],
        quantity: state.cart[index].quantity + action.payload.quantity,
      },
      ...state.cart.slice(index + 1),
    ];
  }

  //If the item was not found in cart, add new item
  if (index === -1) {
    //Assign unique id to the item
    const id = uuidv4();

    return [ { ...action.payload, id }, ...state.cart];
  }
}

function incrementQuantity(state, action) {
  const index = state.cart.findIndex((item) => {
    return (
      item.product.id === action.payload.product.id &&
      _.isEqual(item.selectedAttributes, action.payload.selectedAttributes)
    );
  });

  return [
    ...state.cart.slice(0, index),
    { ...state.cart[index], quantity: state.cart[index].quantity + 1 },
    ...state.cart.slice(index + 1),
  ];
}

function decrementQuantity(state, action) {
  const index = state.cart.findIndex((item) => {
    return (
      item.product.id === action.payload.product.id &&
      _.isEqual(item.selectedAttributes, action.payload.selectedAttributes)
    );
  });

  if (state.cart[index].quantity - 1 > 0) {
    return [
      ...state.cart.slice(0, index),
      { ...state.cart[index], quantity: state.cart[index].quantity - 1 },
      ...state.cart.slice(index + 1),
    ];
  }

  if (state.cart[index].quantity - 1 <= 0) {
    return [...state.cart.slice(0, index), ...state.cart.slice(index + 1)];
  }
}

export const reducer = (
  state = {
    overlayShow: false,
    currencies: [],
    currency: { label: "USD", symbol: "$" },
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return { ...state, product: action.payload.product };
    case "CLEAR_PRODUCT":
      return { ...state, product: null };
    case "SET_CURRENCY":
      return { ...state, currency: action.payload.currency };
    case "FETCH_PRODUCTS":
      return { ...state, products: action.payload.products };
    case "CLEAR_PRODUCTS":
      return { ...state, products: null };
    case "ADD_TO_CART":
      return { ...state, cart: addToCart(state, action) };
    case "FETCH_CURRENCIES":
      return { ...state, currencies: action.payload.currencies };
    case "SET_OVERLAY":
      return { ...state, overlayShow: action.payload.overlayShow };
    case "INCREMENT_QUANTITY":
      return { ...state, cart: incrementQuantity(state, action) };
    case "DECREMENT_QUANTITY":
      return { ...state, cart: decrementQuantity(state, action) };
    default:
      return state;
  }
};
