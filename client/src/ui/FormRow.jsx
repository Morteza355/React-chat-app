export const FormRow = ({ label, error, children }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="text-white font-bold text-sm">{label}</span>
      {children}
    </div>
  )
}
