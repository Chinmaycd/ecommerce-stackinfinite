import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import API_BASE_URL from "@/Apiconfig";
import Cookies from "universal-cookie";

interface WishlistState {
  addingToWishlist: boolean;
  error: string | null;
}

const initialState: WishlistState = {
  addingToWishlist: false,
  error: null,
};

export const addToWishlist = createAsyncThunk<void, string, { rejectValue: string }>(
  "wishlist/addToWishlist",
  async (productId: string, thunkAPI) => {
    try {
      let cookies = new Cookies()
      const userId = cookies.get("userid"); // Get userId from cookies
      const url = `${API_BASE_URL}/wishlist/add`;
      await axios.post(url, { userId, productId });
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add to wishlist");
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToWishlist.pending, (state) => {
        state.addingToWishlist = true;
        state.error = null;
      })
      .addCase(addToWishlist.fulfilled, (state) => {
        state.addingToWishlist = false;
        state.error = null;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.addingToWishlist = false;
        state.error = action.payload as string; // Assuming action.payload is the error message
      });
  },
});

export const selectAddingToWishlist = (state: RootState) => state.addwishlist.addingToWishlist;
export const selectWishlistError = (state: RootState) => state.addwishlist.error;

export default wishlistSlice.reducer;
