export const Heading = ({ as = "h1", className = "", children }) => {
  const defaultClass = "text-white"
  
  if(as === 'h1') {
    return (
      <h1 className={`${defaultClass} font-bold text-4xl ${className}`}>{children}</h1>
    )
  }
  if(as === 'h2') {
    return (
      <h2 className={`${defaultClass} font-bold text-3xl ${className}`}>{children}</h2>
    )
  }
  if(as === 'h3') {
    return (
      <h3 className={`${defaultClass} font-bold text-2xl ${className}`}>{children}</h3>
    )
  }
  if(as === 'h4') {
    return (
      <h4 className={`${defaultClass} font-medium text-xl ${className}`}>{children}</h4>
    )
  }
  if(as === 'h5') {
    return (
      <h5 className={`${defaultClass} ext-medium ${className}`}>{children}</h5>
    )
  }
}
