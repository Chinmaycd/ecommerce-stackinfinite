import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./features/addSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      added: addSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];