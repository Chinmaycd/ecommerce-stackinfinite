import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import API_BASE_URL from '@/Apiconfig';
import Cookies from 'universal-cookie';
import { fetchCartdata } from './cartSlice';

interface WishlistItem {
  _id: string;
  name: string;
  images: string[];
  price: number;
  outOfStock: boolean;
}

interface WishlistState {
  wish:  {
    products: WishlistItem[];
  };
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
  removing: boolean;
  addingToCart: boolean; // Renamed to addingToCart for clarity
}

const initialState: WishlistState = {
  wish: {
    products: [],
  },
  status: 'idle',
  error: null,
  removing: false,
  addingToCart: false, // Initialize to false
};

let cookies = new Cookies();

export const fetchWishlist = createAsyncThunk<WishlistItem[]>(
  'wish/fetchWishlist',
  async () => {
    let userId = cookies.get("userid");
    let url = `${API_BASE_URL}/wishlist/${userId}`;
    try {
      const response = await axios.get<any>(url); // Use any type for response
      return response.data.wishList.products; // Extract products array
    } catch (error) {
      throw new Error('Failed to fetch wishlist');
    }
  }
);

export const removeWishlistItem = createAsyncThunk<void, string>(
  'wish/removeWishlistItem',
  async (productId: string, thunkAPI) => {
    try {
      let userId = cookies.get("userid");
      let url = `${API_BASE_URL}/wishlist/remove`;
      await axios.delete(url, { data: { userId: userId, productId: productId } });
      thunkAPI.dispatch(fetchWishlist());
    } catch (error) {
      throw new Error('Failed to remove item from wishlist');
    }
  }
);

export const addToCart = createAsyncThunk<void, string>(
  'wish/addToCart',
  async (productId: string, thunkAPI) => {
    try {
      let userId = cookies.get("userid");
      let url = `${API_BASE_URL}/carts/add/${productId}`;
      await axios.post(url,{ userId }); // Changed to params
      thunkAPI.dispatch(fetchWishlist());
      thunkAPI.dispatch(fetchCartdata());
    } catch (error) {
      throw new Error('Failed to add product to cart');
    }
  }
);

const wishlistSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWishlist.fulfilled, (state, action: PayloadAction<WishlistItem[]>) => {
        state.status = 'idle';
        state.wish.products = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch wishlist';
      })
      .addCase(removeWishlistItem.pending, (state) => {
        state.removing = true;
        state.status = 'loading';
      })
      .addCase(removeWishlistItem.fulfilled, (state) => {
        state.removing = false;
        state.status = 'idle';
      })
      .addCase(removeWishlistItem.rejected, (state, action) => {
        state.removing = false;
        state.error = action.error.message || 'Failed to remove item from wishlist';
        state.status = 'idle';
      })
      .addCase(addToCart.pending, (state) => {
        state.addingToCart = true; // Renamed for clarity
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.addingToCart = false; // Reset to false on success
        state.status = 'idle';
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.addingToCart = false; // Reset to false on failure
        state.error = action.error.message || 'Failed to add product to cart';
        state.status = 'idle';
      });
  },
});

export default wishlistSlice.reducer;
