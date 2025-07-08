import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

// ------------------ Async Thunks ------------------

// Add to Cart
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId, quantity }) => {
    const response = await axios.post(`${BASE_URL}/addToCart`, {
      userId,
      productId,
      quantity,
    });
    return response.data;
  }
);

// Get Cart
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (userId) => {
    const response = await axios.get(`${BASE_URL}/getcart/${userId}`);
    return response.data.cartItems;
  }
);

// Update Quantity
export const updateCartItem = createAsyncThunk(
  'cart/updateCartItem',
  async ({ userId, productId, quantity }) => {
    await axios.put(`${BASE_URL}/cartupdate`, {
      userId,
      productId,
      quantity,
    });
    return { productId, quantity };
  }
);

// Remove Item
export const removeCartItem = createAsyncThunk(
  'cart/removeCartItem',
  async ({ userId, productId }) => {
    await axios.delete(`${BASE_URL}/cartremove`, {
      data: { userId, productId },
    });
    return productId;
  }
);

// ------------------ Slice ------------------

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        // Optionally refetch or push directly
        state.items.push(action.payload.addedItem);
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const { productId, quantity } = action.payload;
        const item = state.items.find((item) => item.productId === productId);
        if (item) item.quantity = quantity;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        const productId = action.payload;
        state.items = state.items.filter((item) => item.productId !== productId);
      });
  },
});

export default cartSlice.reducer;
