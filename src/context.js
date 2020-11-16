import React, { useState, useContext, useReducer, useEffect } from 'react'
// Previous Hard Coded Value
// import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, [/* cartItems */])
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "INIT", data })
        setCount(data.length)
        setTotal(data
        /********/.reduce((total, item) => {
        /********/    return total + Number(item.price)
        /********/  }, 0))
        setLoading(false)
      })
  }, [])

  return (
    <AppContext.Provider
      value={{
        cart,
        count,
        setCount,
        dispatch,
        total,
        setTotal,
        loading,
        setLoading
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
