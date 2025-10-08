import { createSlice } from '@reduxjs/toolkit';

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  if (cart) return JSON.parse(cart);
};

const initialState = getCartFromLocalStorage() || {
  cartItems: [],
  quantity: 0,
  subtotal: 0,
  shipping: 5,
  tax: 0,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addItem: (state, action) => {
      const { color, product, quantity } = action.payload;
      const productTotal = quantity * (Number(product.price) / 100);

      const item = state.cartItems.find((item) => {
        return item.product.title === product.title && item.color === color;
      });

      if (!item) {
        state.cartItems.push(action.payload);
      } else {
        item.quantity += Number(quantity);
      }

      state.quantity += quantity;
      state.subtotal += Number(productTotal.toFixed(2));
      state.tax = state.subtotal * 0.1;

      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const {
        color: removedItemColor,
        title: removedItemTitle,
        quantity: removedItemQuantity,
        price: removedItemPrice,
      } = action.payload;

      state.cartItems = state.cartItems.filter(({ product, color }) => {
        product.title !== removedItemTitle && removedItemColor !== color;
      });

      state.quantity -= removedItemQuantity;
      state.subtotal -= removedItemQuantity * (removedItemPrice / 100);
      state.tax = state.subtotal * 0.1;

      localStorage.setItem('cart', JSON.stringify(state));
    },
    editItem: (state, action) => {
      const {
        title: editedItemTitle,
        price: editedItemPrice,
        color: editedItemColor,
        quantity: newQuantity,
      } = action.payload;

      const item = state.cartItems.find(
        ({ product, color }) =>
          product.title === editedItemTitle && color === editedItemColor
      );

      item.quantity = newQuantity;

      state.quantity = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      state.subtotal = state.cartItems.reduce((acc, item) => {
        const { quantity, product } = item;
        return quantity * (Number(product.price) / 100);
      }, 0);
      state.tax = state.subtotal * 0.1;

      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      state.quantity = 0;
      state.subtotal = 0;
      state.tax = 0;

      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
