const sizeClasses = {
  lg: "py-3.5 px-6",
  md: "py-2.5 px-4",
  sm: "p-2"
}

const variationClasses = {
  primary: "bg-primary shadow-primary",
  secondary: "bg-secondary shadow-secondary",
  tertiary: "bg-tertiary shadow-tertiary",
}

export const Button = ({ size = "md", variation = "primary", children, ...props }) => {
  const className = `w-full button ${sizeClasses[size]} ${variationClasses[variation]}`;

  return (
    <button className={className} {...props} >{children}</button>
  )
}
