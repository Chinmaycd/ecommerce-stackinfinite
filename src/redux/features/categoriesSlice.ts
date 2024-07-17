// src/slices/categoriesSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import API_BASE_URL from '@/Apiconfig';

// Define a type for the category
interface Category {
  _id: string;
  name: string;
  image: string;
}

// Define the initial state using that type
interface CategoriesState {
  categories: Category[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  status: 'idle',
  error: null,
};

// Async thunk to fetch categories
//action
export const fetchCategories = createAsyncThunk<Category[]>(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get<Category[]>(`${API_BASE_URL}/categories`);
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export default categoriesSlice.reducer;
