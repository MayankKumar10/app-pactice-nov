import { configureStore } from "@reduxjs/toolkit";
import { ProductsReducer } from "./ProductSlice";
import { EmployeeReducer } from "./EmployeeSlice";
import { TodoReducer } from "./TodoSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    employee: EmployeeReducer,
    todo: TodoReducer,
  }
})