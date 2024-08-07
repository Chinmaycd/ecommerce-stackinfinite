import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import Cookies from "universal-cookie";
import API_BASE_URL from "@/Apiconfig";

interface Product {
  _id: string;
  name: string;
  images: string[];
  categoryId: any;
  category: string;
  description?: string;
  price: number;
  discountPrice: number;
  offer: string;
  outOfStock: boolean;
}

interface ProductsState {
  products: Product[];
  loading: "idle" | "loading" | "failed";
  error: string | null;
  currentPage: number;
  totalPages: number;
  // addingToWishlist: boolean;
}

const initialState: ProductsState = {
  products: [],
  loading: "idle",
  error: null,
  currentPage: 1,
  totalPages: 0,
  // addingToWishlist: false,
};

// Fetch userId from cookies
const cookies = new Cookies();
// const userId = cookies.get("userId");

// Define your async thunk to fetch products with pagination
export const fetchProducts = createAsyncThunk<
  { products: Product[]; totalPages: number },
  { page: number; categoryId?: any },
  { rejectValue: string }>
  ("products/fetchProducts", async ({ page, categoryId }, thunkAPI) => {
  try {
    let url = `${API_BASE_URL}/products?page=${page}&limit=12`;
    if (categoryId) {
      url += `&categoryId=${categoryId}`;
    }
    const response = await axios.get(url);
    return {
      products: response.data.products,
      totalPages: response.data.pagination.totalPages,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch products");
  }
});

// Define your slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = "idle";
        state.error = null;
        state.products = action.payload.products;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string; // Assuming action.payload is the error message
      });
  },
});

export const { setCurrentPage } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsLoading = (state: RootState) =>
  state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;
export const selectCurrentPage = (state: RootState) =>
  state.products.currentPage;
export const selectTotalPages = (state: RootState) => state.products.totalPages;

export default productsSlice.reducer;
