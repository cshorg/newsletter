import { createContext, useState } from "react"

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [status, setStatus] = useState(false)
  const [error, setError] = useState(false)

  return (
    <MainContext.Provider value={{ status, setStatus, error, setError }}>
      {children}
    </MainContext.Provider>
  )
}
