const Button = ({label}) => {
  return (
    <button className="rounded-sm shadow-md font-medium w-24 h-8 flex justify-evenly items-center m-1" >
      {label}
    </button>
  )
}

export default Button