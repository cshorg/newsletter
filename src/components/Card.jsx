import { useContext } from "react"
import Button from "./Button"
import CardInfo from "./CardInfo"
import Input from "./Input"
import { MainContext } from "../context/MainContext"

const Card = () => {
  const { setStatus } = useContext(MainContext)

  return (
    <div className="lg:w-[960px] w-full h-full bg-white lg:h-[680px] lg:rounded-3xl shadow-2xl flex flex-col justify-between lg:flex-row">
      <img
        className="w-[375px] lg:hidden"
        src="src/assets/images/illustration-sign-up-mobile.svg"
        alt="banner"
      />
      <div className="flex flex-col items-start lg:w-[480px] lg:pl-16 lg:py-28">
        <CardInfo />
        <div className="w-full px-6 mt-6">
          <Input />
        </div>
        <div className="w-full px-6 mt-6 mb-6">
          <Button
            onClick={() => setStatus(true)}
            label={"Subscribe to monthly newsletter"}
          />
        </div>
      </div>
      <img
        className="hidden object-scale-down w-[420px] lg:flex lg:pr-10 "
        src="src/assets/images/illustration-sign-up-desktop.svg"
        alt="banner"
      />
    </div>
  )
}

export default Card
