import { SignIn } from "@clerk/nextjs";

//todo write tests that tests any routes lead to sign ins
//eg /sign-in/dheihfewih/;aojaojdwo --> leads to sign in page:
// https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-routes

const SignInPage = () => (
  <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
);

export default SignInPage;
