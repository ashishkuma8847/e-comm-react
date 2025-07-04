import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//  Async Thunk for Adding Item to Cart
export const addToCart = createAsyncThunk( 'cart/addToCart',
  async ({ userId, productId, quantity }, thunkAPI) => {
    try {
      const response = await axios.post(  `${import.meta.env.VITE_BASE_URL}/addToCart`,{ 
        userId, productId, quantity }
      )
      return response.data // success
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message) // error
    }
  }
)

//  Initial State
const initialState = {
  items: [],       // cart ke items
  status: 'idle',  // loading | succeeded | failed
  error: null,     // agar error aaye to store karega
}

//  Slice Creation
const cartSlice = createSlice({
  name: 'addcart',
  initialState,
  reducers: {}, // yahan sync reducers hoti hain
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading' // API call chalu
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'succeeded' // API call success
        state.items.push(action.payload.cartItem) // naya item add karo
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed' // API call fail
        state.error = action.payload // error store karo
      })
  },
})

//  Export Reducer
export default cartSlice.reducer

