const CardInfo = () => {
  return (
    <div className="px-6 pb-6 mt-10 lg:mt-0 text-slate">
      <div className="text-4xl font-bold lg:text-5xl text-slate">
        Stay Updated!
      </div>
      <p className="mt-8 lg:w-[400px]">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="mt-8">
        <li className="flex gap-3 lg:items-center">
          <div className="w-5 mt-1 lg:mt-0">
            <img src="src/assets/images/icon-success.svg" alt="icon" />
          </div>
          Product discovery and building what matters
        </li>
        <li className="flex gap-3 mt-3 lg:items-center">
          <div className="w-5 mt-1 lg:mt-0">
            <img src="src/assets/images/icon-success.svg" alt="icon" />
          </div>
          Measuring to ensure updates are a success
        </li>
        <li className="flex items-center gap-3 mt-3">
          <div className="w-5">
            <img src="src/assets/images/icon-success.svg" alt="icon" />
          </div>
          And much more!
        </li>
      </ul>
    </div>
  )
}

export default CardInfo
