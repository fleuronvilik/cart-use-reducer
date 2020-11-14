import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, cartItems)
  const [count, setCount] = useState(3)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(cart.reduce((total, item) => total + item.price, 0))
  }, [])
/* const [cart, setCart] = useState(cartItems)
  const remove = (id) => {
    return setCart(cartState => {
      return cartState.filter(item => item.id !== id)
    })
  }
  
  const increase = (id) => {
    return setCart(cartState => {
      return cartState.map(item => {
        if (item.id === id) {
          item.amount++
          console.log(item)
        }
      })
    })
  }*/

  return (
    <AppContext.Provider
      value={{
        cart,
        count,
        setCount,
        dispatch,
        total,
        setTotal
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
