const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_QUANTITY":
      const { productId, newQuantity } = action.payload;
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              quantity: newQuantity,
            };
          }
          return product;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
