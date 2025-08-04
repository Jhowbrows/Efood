import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pedido, Restaurant } from '../../pages/Home'

type CartState = {
  items: Restaurant[]
  pedido: Pedido[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  pedido: [],
  isOpen: false
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Pedido>) => {
      const pedido = state.pedido.find((item) => item.id === action.payload.id)

      if (!pedido) {
        state.pedido.push(action.payload)
      } else {
        alert('O Pedido já se encontra no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.pedido = state.pedido.filter((p) => p.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open, remove } = CartSlice.actions
export default CartSlice.reducer
