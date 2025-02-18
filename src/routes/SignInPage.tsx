import { SignIn } from "@clerk/clerk-react"


const SignInPage = () => {
  return (
    <div>
      <SignIn path="/signin" />
    </div>
  )
}

export default SignInPage