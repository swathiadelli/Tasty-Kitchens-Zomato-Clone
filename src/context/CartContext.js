import React from 'react'

const CartContext = React.createContext({
  cartLIst: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuality: () => {},
  decrementCartItemQuality: () => {},
})

export default CartContext
