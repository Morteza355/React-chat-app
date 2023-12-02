import { useNavigate } from "react-router-dom"

import { Button } from "./Button"
import { Heading } from "./Heading"

export const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="h-[100dvh] flex-col gap-12 flex justify-center items-center">
      <Heading as="h1">
        The page that you're looking for is not found...
      </Heading>
      <div>
        <Button size="lg" onClick={() => navigate('/')} variation="primary">
          Back to Home
        </Button>
      </div>
    </div>
  )
}
