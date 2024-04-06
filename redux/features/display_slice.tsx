// displaySlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DisplayState {
  navBarVariant: 'NavBar1' | 'NavBar2';
  productCardVariant: 'ProductCard1' | 'ProductCard2';
  catalogView: 'carousel' | 'view_all';
}

// Initial state
const initialState: DisplayState = {
  navBarVariant: 'NavBar1', // Default navigation bar variant
  productCardVariant: 'ProductCard1', // Default product card variant
  catalogView: 'carousel', // Default catalog view mode
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    // Action to set the navigation bar variant
    setNavBarVariant: (state, action: PayloadAction<'NavBar1' | 'NavBar2'>) => {
      state.navBarVariant = action.payload;
      console.log("navvariant updated in teh store",state.navBarVariant )
    },
    // Action to set the product card variant
    setProductCardVariant: (state, action: PayloadAction<'ProductCard1' | 'ProductCard2'>) => {
      state.productCardVariant = action.payload;
    },
    // Action to set the catalog view mode
    setCatalogView: (state, action: PayloadAction<'carousel' | 'view_all'>) => {
      state.catalogView = action.payload;
    },
  },
});

// Export actions
export const { setNavBarVariant, setProductCardVariant, setCatalogView } = displaySlice.actions;

// Export the reducer
export default displaySlice.reducer;
