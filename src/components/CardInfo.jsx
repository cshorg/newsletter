const CardInfo = () => {
  return (
    <div className="p-6 mt-10 text-slate">
      <div className="text-4xl font-bold lg:text-5xl text-slate">
        Stay Updated!
      </div>
      <p className="mt-8 lg:w-[400px]">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="mt-8">
        <li className="flex items-center gap-3">
          <div className="w-5">
            <img src="src/assets/images/icon-success.svg" alt="icon" />
          </div>
          Product discovery
        </li>
        <li className="flex items-center gap-3 mt-3">
          <div className="w-5">
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
