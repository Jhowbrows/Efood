import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Restaurant[]
  pedido: Pedido[]
  isOpen: boolean
  isOrder: boolean
  isPayment: boolean
}

const initialState: CartState = {
  items: [],
  pedido: [],
  isOpen: false,
  isOrder: false,
  isPayment: false
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
    },
    openOrder: (state) => {
      state.isOrder = true
    },
    closeOrder: (state) => {
      state.isOrder = false
    },
    openPayment: (state) => {
      state.isPayment = true
    },
    closePayment: (state) => {
      state.isPayment = false
    },
    clear: (state) => {
      state.pedido = []
    }
  }
})

export const {
  add,
  close,
  open,
  remove,
  closeOrder,
  closePayment,
  openOrder,
  openPayment,
  clear
} = CartSlice.actions
export default CartSlice.reducer
