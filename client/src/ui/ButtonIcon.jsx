export const ButtonIcon = ({ icon, className, ...props }) => {
  return (
    <button {...props} className={`text-white text-3xl hover:bg-white-transparent transition rounded-md p-1.5 ${className}`}>
      {icon}
    </button>
  )
}
