import { useState } from "react"
import Card from "./components/Card"
import ThankyouCard from "./components/ThankyouCard"

function App() {
  const [status, setStatus] = useState(false)

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-charcoal font-display">
        {status === true ? <ThankyouCard /> : <Card />}
      </div>
    </>
  )
}

export default App
