import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartSlice from './reducers/Cart'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type RootReducer = ReturnType<typeof store.getState>
