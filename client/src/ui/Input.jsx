const variationClasses = {
  primary: "border-primary",
  secondary: "border-secondary",
  tertiary: "border-tertiary",
}

export const Input = ({ variation = "primary", type = "text", className = "", ...props }) => {
  const defaultClass = `placeholder:text-sm placeholder:text-gray-50 focus:placeholder:text-white placeholder:transition-all focus:border-b-2 transition-all py-1 px-1.5 tracking-wide bg-transparent text-md text-white focus:outline-0 border-b ${variationClasses[variation]} ${className}`
  
  return (
    <input {...props} type={type} className={defaultClass} />
  )
}
