import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const addToCart = createAsyncThunk('cart/addToCart',async ({ userId, productId, quantity }, thunkAPI) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/addToCart`, {
        userId,
        productId,
        quantity,
      })
      return response.data 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
  }
)

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
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items.push(action.payload?.cartItem)
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export default cartSlice.reducer
