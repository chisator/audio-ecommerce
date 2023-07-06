import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalPrecio: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existe = state.cart.some(
        (product) => product.id === action.payload.id
      );

      if (!existe) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.cart, action.payload])
        );
        state.cart = [...state.cart, action.payload];
      } else {
        let newArr = state.cart.map((element) => {
          if (element.id === action.payload.id) {
            return {
              ...element,
              quantity: element.quantity + action.payload.quantity,
            };
          } else {
            return element;
          }
        });
        state.cart = newArr;
        localStorage.setItem("cart", JSON.stringify(newArr));
      }
    },
    lengthCart: (state) => {
      console.log(state.cart);

      state.total += state.cart.quantity;
    },
    clearCart: (state) => {
      state.total = 0;
      state.cart = [];
      localStorage.removeItem("cart");
    },
    removeById: (state, action) => {
      let newArr = state.cart.filter(
        (element) => element.id !== action.payload
      );
      state.cart = newArr;
      localStorage.setItem("cart", JSON.stringify(newArr));
    },
    getTotalPrice: (state) => {
      const totalPrecio = state.cart.reduce((acc, element) => {
        return (
          acc +
          (element.quantity < element.stock
            ? element.quantity
            : element.stock) *
            element.price
        );
      }, 0);
      state.totalPrecio = totalPrecio;
    },
    decrementOneById: (state, action) => {
      let id = action.payload;
      const newArr = state.cart.map((product) => {
        
        if(product.id === id){
          return {...product, quantity: product.quantity - 1} 
        }
        return product;
      });
      state.cart = newArr;
      localStorage.setItem("cart", JSON.stringify(newArr))
    },
    incrementOneById: (state, action) => {
      let id = action.payload;
      const newArr = state.cart.map((product) => {
        if(product.id === id){
          return {...product, quantity: product.quantity + 1} 
        }
        return product;
      });
      
      state.cart = newArr;
      localStorage.setItem("cart", JSON.stringify(newArr));
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  lengthCart,
  clearCart,
  removeById,
  getTotalPrice,
  decrementOneById,
  incrementOneById,
} = cartSlice.actions;

export default cartSlice.reducer;
