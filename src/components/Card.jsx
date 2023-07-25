import Button from "./Button"
import CardInfo from "./CardInfo"
import Input from "./Input"

const Card = () => {
  return (
    <div className="w-2/3 bg-white h-[680px] rounded-3xl shadow-2xl flex flex-row">
      <div className="flex flex-col items-start pl-16 pr-8 py-28">
        <CardInfo />
        <div className="mt-12">
          <Input />
        </div>
        <div className="mt-6">
          <Button />
        </div>
      </div>
      <img
        className="object-scale-down"
        src="src/assets/images/illustration-sign-up-desktop.svg"
        alt="banner"
      />
    </div>
  )
}

export default Card
