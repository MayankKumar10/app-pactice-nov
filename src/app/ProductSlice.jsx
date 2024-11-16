import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
  error: null,
}

let URL = "https://fakestoreapi.com/products"

export let fetchProducts = createAsyncThunk("products/fetchProducts", async()=>{
  try{
    let res = await fetch (URL)
    let result = await res.json()
    return result
  } catch (err){
    return err.message
  }
})

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
     like : ( state, action ) => {
      let { id } = action.payload

      let productId = state.products.find((item)=> item.id === id)

      if(productId) productId.like++

    },
    
    dislike : ( state, action ) => {
      let { id } = action.payload

      let productId = state.products.find((item)=> item.id === id)

      if(productId) productId.dislike++

    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state, )=>{
      state.status = "loading" 
    })
    .addCase(fetchProducts.fulfilled, (state, action)=>{
      state.status = "success"
      let allProducts = action?.payload?.map((item)=>({
        ...item,
        like: 0,
        dislike: 0,
      })) 
      state.products = allProducts
    })
    .addCase(fetchProducts.rejected, (state, action)=>{
      state.status = "error"
      state.error = action.error.message 
    })
  }
})

export let { like, dislike } = ProductSlice.actions
export let ProductsReducer = ProductSlice.reducer