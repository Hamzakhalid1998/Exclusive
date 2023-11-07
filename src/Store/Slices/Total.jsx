// In your Redux reducer file (e.g., cartReducer.js)
const initialState = {
  cart: [], // Your cart state
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
    // Other case statements for your existing actions

    default:
      return state;
  }
};

export default cartReducer;
