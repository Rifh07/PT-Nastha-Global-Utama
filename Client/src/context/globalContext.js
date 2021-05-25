import { createContext, useReducer } from "react"

export const AppContext = createContext()

const initialState = {
  users: 'User',
  pictures: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "favorite":
      return {
        ...state,
        pictures: [
          ...state.pictures,
          {
            ...action.payload,
          },
        ],
      }
    case "un-favorite":
      return {
        ...state,
        pictures: state.pictures.filter(
          (picture) => picture.id !== action.payload.id
        ),
      }
    default:
      throw new Error()
  }
}

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}