import Button from "./Button"
import CardInfo from "./CardInfo"
import Input from "./Input"

const Card = () => {
  return (
    <div className="lg:w-[960px] w-full h-full bg-white lg:h-[680px] lg:rounded-3xl shadow-2xl flex flex-col lg:flex-row">
      <img
        className="w-[375px] lg:hidden"
        src="src/assets/images/illustration-sign-up-mobile.svg"
        alt="banner"
      />
      <div className="flex flex-col items-start lg:pl-16 lg:pr-8 lg:py-28">
        <CardInfo />
        <div className="px-6 mt-8">
          <Input />
        </div>
        <div className="px-6 mt-6">
          <Button />
        </div>
      </div>
      <img
        className="hidden object-scale-down w-[380px] lg:flex"
        src="src/assets/images/illustration-sign-up-desktop.svg"
        alt="banner"
      />
    </div>
  )
}

export default Card
