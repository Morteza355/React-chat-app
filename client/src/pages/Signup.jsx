import { SignupForm } from "../features/authentication/SignupForm"
import { ChangeThemeButton } from "../ui/ChangeThemeButton"

export const Signup = () => {
  return (
    <div className="relative flex justify-center items-center h-[100dvh] transition bg-dark">
      <ChangeThemeButton className="absolute top-2 right-2" />
      <SignupForm />
    </div>
  )
}
