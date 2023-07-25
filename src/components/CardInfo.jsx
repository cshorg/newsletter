const CardInfo = () => {
  return (
    <div className="text-slate">
      <div className="text-5xl font-bold text-slate">Stay Updated!</div>
      <p className="mt-8 w-[400px]">
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
