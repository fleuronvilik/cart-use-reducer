export default function reducer (state, action) {
  if (action.type === "REMOVE_ITEM") {
    return state.filter(item => item.id !== action.itemId)
  }
  
  if (action.type === "INCREASE") {
    return state.map(item => {
      if (item.id === action.itemId) item.amount = action.amount
      return item
    }) 
  }
  
  if (action.type === "DECREASE") {
    return state.map(item => {
      if (item.id === action.itemId) item.amount = action.amount//--item.amount 
      return item
    }) 
  }
  
  if (action.type === "CLEAR") {
    return []
  }
  
  if (action.type === "INIT") {
    return action.data
  }
  
  throw new Error("no matching type")
}