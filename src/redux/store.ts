import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from '@/redux/features/wishlistSlice';
import authSlice from "./features/authSlice";
import categoriesSlice from "./features/categoriesSlice";
import productSlice from "./features/productSlice";
import addWishlistSlice from "./features/addWishlistSlice";
import cartSlice from "./features/cartSlice";


export const store = () => {
  return configureStore({
    reducer: {
      wish: wishlistReducer,
      auth: authSlice,
      categories: categoriesSlice,
      products:productSlice,
      addwishlist:addWishlistSlice,
      cart:cartSlice,
    },
    
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];