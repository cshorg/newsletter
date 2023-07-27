const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="min-w-full p-4 font-semibold text-white rounded-lg bg-slate hover:shadow-2xl bg-gradient-to-r hover:from-brightRed hover:to-brightOrange"
    >
      {label}
    </button>
  )
}

export default Button
