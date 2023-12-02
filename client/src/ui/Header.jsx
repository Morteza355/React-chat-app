import { ChangeThemeButton } from "./ChangeThemeButton"
import { Heading } from "./Heading"

export const Header = () => {
  return (
    <header className="py-3 px-16 bg-primary flex justify-between items-center">
      <Heading as="h4">
        Chat App
      </Heading>
      <div>
        <ChangeThemeButton />
      </div>

    </header>
  )
}
