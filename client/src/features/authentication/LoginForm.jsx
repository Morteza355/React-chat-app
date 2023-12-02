import { Input } from "../../ui/Input"
import { FormRow } from "../../ui/FormRow"
import { Heading } from "../../ui/Heading"
import { Button } from "../../ui/Button"
import { Link } from "react-router-dom"

export const LoginForm = () => {
  return (
    <form className="border border-primary p-14 rounded-md shadow-sm shadow-primary">
      <Heading as="h2" className="text-center pb-5">
        ChittyChat 😜
      </Heading>
      <div className="flex flex-col gap-6 mt-6">
        <FormRow label="Email">
          <Input type="email" variation="tertiary" placeholder="Enter your email..." />
        </FormRow>
        <FormRow label="Password">
          <Input type="password" variation="tertiary" placeholder="Enter your password..." />
        </FormRow>
        <Button variation="tertiary">
          Login
        </Button>
      </div>
      <span className="pt-8 text-white text-sm inline-block">
        New here? {" "}
        <Link className="text-tertiary" to="/signup">
          Create a new account here
        </Link>
      </span>
      

    </form>
  )
}
