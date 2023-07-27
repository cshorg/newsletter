import { useContext } from "react"
import Card from "./components/Card"
import ThankyouCard from "./components/ThankyouCard"
import { MainContext } from "./context/MainContext"

function App() {
  const { status } = useContext(MainContext)

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-charcoal font-display">
        {status === true ? <ThankyouCard /> : <Card />}
      </div>
    </>
  )
}

export default App
