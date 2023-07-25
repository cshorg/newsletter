import { useState } from "react"

const Input = () => {
  const [email, setEmail] = useState("")

  return (
    <div className="flex flex-col">
      <label className="text-xs font-semibold">Email Address</label>
      <input
        className="outline-none border-[1px] border-grey mt-2 focus:border-slate cursor-pointer px-6 h-14 w-[360px] rounded-lg"
        onChange={(e) => setEmail(e.target.value)}
        value={email || ""}
        type="text"
        placeholder="email@company.com"
      />
    </div>
  )
}

export default Input
