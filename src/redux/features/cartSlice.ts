import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_BASE_URL from "@/Apiconfig";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";

interface Cart {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity:number;
}

interface CartState {
  cart: Cart[];
  status: "idle" | "loading" | "failed";
  error: string | null;
  totalPrice: number;
}

const initialState: CartState = {
  status: "idle",
  error: null,
  cart: [],
  totalPrice: 0,
};

// Fetch cart data async thunk
export const fetchCartdata = createAsyncThunk(
  'fetchCartdata',
  async () => {
    const cookies = new Cookies();
    const userId = cookies.get("userid"); // Get userId from cookies
    const url = `${API_BASE_URL}/carts/products/${userId}`;
    try {
      const response = await axios.get<{ carts: Cart[]; totalPrice: number }>(url);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch cart data');
    }
  }
);

// Delete cart item async thunk
export const deleteCartItem = createAsyncThunk(
  'deleteCartItem',
  async (productId: string, thunkAPI) => {
    const cookies = new Cookies();
    const userId = cookies.get("userid"); // Get userId from cookies
    const url = `${API_BASE_URL}/carts/delete/${productId}`;
    await axios.delete(url, { data: { userId } });
    thunkAPI.dispatch(fetchCartdata());    // Return productId to identify which item was deleted
    return productId;
  }
);
// Increment quantity async thunk
export const incrementCartItem = createAsyncThunk(
  'incrementCartItem',
  async (productId: string, thunkAPI) => {
    const cookies = new Cookies();
    const userId = cookies.get("userid"); // Get userId from cookies
    const url = `${API_BASE_URL}/carts/increase/${productId}`;
    await axios.put(url, { userId });
    thunkAPI.dispatch(fetchCartdata());    // Fetch updated cart data after increment
    return productId;
  }
);

// Decrement quantity async thunk
export const decrementCartItem = createAsyncThunk(
  'decrementCartItem',
  async (productId: string, thunkAPI) => {
    const cookies = new Cookies();
    const userId = cookies.get("userid"); // Get userId from cookies
    const url = `${API_BASE_URL}/carts/decrease/${productId}`;
    await axios.put(url, { userId });
    thunkAPI.dispatch(fetchCartdata());    // Fetch updated cart data after decrement
    return productId;
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartdata.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCartdata.fulfilled, (state, action) => {
        state.status = "idle";
        state.error = null;
        state.cart = action.payload.carts;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(fetchCartdata.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || 'Failed to fetch cart data';
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.status = "idle";
        state.error = null;
        // Remove the deleted item from the cart array
        state.cart = state.cart.filter(item => item._id !== action.payload);
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || 'Failed to delete item from cart';
      })
      .addCase(incrementCartItem.fulfilled, (state, action) => {
        state.status = "idle";
        state.error = null;
        // Find the item in cart and increment its quantity
        const updatedCart = state.cart.map(item => {
          if (item._id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        state.cart = updatedCart;
      })
      .addCase(decrementCartItem.fulfilled, (state, action) => {
        state.status = "idle";
        state.error = null;
        // Find the item in cart and decrement its quantity (minimum 1)
        const updatedCart = state.cart.map(item => {
          if (item._id === action.payload) {
            return {
              ...item,
              quantity: Math.max(item.quantity - 1, 1),
            };
          }
          return item;
        });
        state.cart = updatedCart;
      });
  },
});

export default cartSlice.reducer;
