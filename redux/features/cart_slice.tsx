import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Adjusting the CartItem interface to match the product structure
interface CartItem {
  id: number; // Adjusted type to match the product id type
  title: string;
  price: number;
  image: string; // Including image URL
  quantity: number;
}

// Initial state for the cart
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItemToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);

      if (existingIndex >= 0) {
        // If the item already exists, increase the quantity
        state.items[existingIndex].quantity += 1;
      } else {
        // If it's a new item, add it to the cart with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    // Action to remove an item from the cart
    removeItemFromCart: (state, action: PayloadAction<number>) => { // Adjusted type to match the product id type
      const existingIndex = state.items.findIndex(item => item.id === action.payload);

      if (existingIndex >= 0) {
        // Adjust totalQuantity and totalPrice
        state.totalQuantity -= state.items[existingIndex].quantity;
        state.totalPrice -= state.items[existingIndex].price * state.items[existingIndex].quantity;

        // Remove the item from the cart
        state.items.splice(existingIndex, 1);
      }
    },
  },
});

// Export actions
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
