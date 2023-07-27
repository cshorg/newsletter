import { useContext } from "react"
import Button from "./Button"
import { MainContext } from "../context/MainContext"

const ThankyouCard = () => {
  const { setStatus } = useContext(MainContext)

  return (
    <div className="w-full h-full lg:w-[500px] lg:h-[500px] lg:rounded-3xl bg-white flex flex-col items-start justify-between lg:px-16 px-6 lg:py-14">
      <div className="mt-32 lg:mt-0">
        <img
          className="w-14"
          src="src/assets/images/icon-list.svg"
          alt="icon"
        />
        <div className="mt-8 text-5xl font-bold text-charcoal">
          Thanks for subscribing!
        </div>
        <div className="mt-8 text-slate">
          A confirmation email has been sent to{" "}
          <a className="font-bold">ash@loremcompany.com.</a>
          Please open it and click the button inside to confirm your
          subscription.
        </div>
      </div>

      <div className="w-full mt-10 mb-6">
        <Button onClick={() => setStatus(false)} label={"Dismiss message"} />
      </div>
    </div>
  )
}

export default ThankyouCard
