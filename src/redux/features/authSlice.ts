import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  userId: string | null;
  // other auth related states
}

const initialState: AuthState = {
  userId: null,
  // initialize other auth states
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    // other reducers for auth state
  },
});

export const { setUserId } = authSlice.actions;
export default authSlice.reducer;
