import { createContext, useState } from "react"

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [status, setStatus] = useState(true)

  return (
    <MainContext.Provider value={{ status, setStatus }}>
      {children}
    </MainContext.Provider>
  )
}
