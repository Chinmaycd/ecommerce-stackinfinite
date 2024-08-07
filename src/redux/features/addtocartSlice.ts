// import API_BASE_URL from "@/Apiconfig";
// import { fetchCartdata } from "./cartSlice";
// import { fetchWishlist } from "./wishlistSlice";
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";


// export const addToCart = createAsyncThunk<void, string>(
//   'wish/addToCart',
//   async (productId: string, thunkAPI) => {
//     try {
//       let userId = cookies.get("userid");
//       let url = `${API_BASE_URL}/carts/add/${productId}`;
//       await axios.post(url,{ userId }); // Changed to params
//       thunkAPI.dispatch(fetchWishlist());
//       thunkAPI.dispatch(fetchCartdata());

//     } catch (error) {
//       throw new Error('Failed to add product to cart');
//     }
//   }
// );