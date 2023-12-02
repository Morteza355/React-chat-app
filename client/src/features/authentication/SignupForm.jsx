import { Input } from "../../ui/Input"
import { FormRow } from "../../ui/FormRow"
import { Heading } from "../../ui/Heading"
import { Button } from "../../ui/Button"
import { Link } from "react-router-dom"

export const SignupForm = () => {
  return (
    <form className="border border-primary py-8 px-12 rounded-md shadow-sm shadow-primary">
      <Heading as="h2" className="text-center pb-5">
        ChittyChat 😜
      </Heading>
      <div className="flex flex-col gap-6 mt-6">
        <FormRow label="Name">
          <Input type="text" variation="tertiary" placeholder="Enter your name..." />
        </FormRow>
        <FormRow label="Email">
          <Input type="email" variation="tertiary" placeholder="Enter your email..." />
        </FormRow>
        <FormRow label="Password">
          <Input type="password" variation="tertiary" placeholder="Enter your password..." />
        </FormRow>
        <FormRow label="Confirm password">
          <Input type="password" variation="tertiary" placeholder="Confirm your password..." />
        </FormRow>
        <Button variation="tertiary">
          Signup
        </Button>
      </div>
      <span className="pt-8 text-white text-sm inline-block">
        Have an account? {" "}
        <Link className="text-tertiary" to="/login">
          Login here
        </Link>
      </span>
    </form>
  )
}
