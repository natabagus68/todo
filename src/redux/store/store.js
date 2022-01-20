import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../feautures/dataSlice'
export const store = configureStore({
  reducer: {
    data: dataReducer
  },
})