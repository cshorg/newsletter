import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/MainContext"

const Input = () => {
  const [email, setEmail] = useState("")
  const { error, setError } = useContext(MainContext)

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email) && email.length >= 6) {
      setError(true)
    } else {
      setError(false)
    }
  }

  useEffect(() => {
    validateEmail()
  }, [email])

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate">
          Email Address
        </label>
        {error && (
          <label className="text-xs font-semibold text-tomato">
            Valid email required
          </label>
        )}
      </div>

      <input
        className={` ${
          error &&
          "border-tomato focus:border-tomato text-tomato bg-tomato bg-opacity-20"
        } outline-none border-[1px] border-grey mt-2 focus:border-slate cursor-pointer px-6 h-14 w-full rounded-lg`}
        onChange={(e) => setEmail(e.target.value)}
        value={email || ""}
        type="text"
        placeholder="email@company.com"
      />
    </div>
  )
}

export default Input
