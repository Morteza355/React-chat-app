import { LoginForm } from "../features/authentication/LoginForm"
import { ChangeThemeButton } from "../ui/ChangeThemeButton"

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-[100dvh] bg-dark relative transition">
      <ChangeThemeButton className="absolute top-2 right-2" />
      <LoginForm />
    </div>
  )
}
