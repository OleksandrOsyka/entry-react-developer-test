export const  reducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case "FETCH_PRODUCT":
        console.log("reducer")
        console.log(state)
        return { ...state, product: action.payload.product };
      default:
        return state;
    }
  };