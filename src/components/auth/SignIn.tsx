import { Button } from "flowbite-react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <Button onClick={() => signIn("discord")}>Sign in with Discord</Button>
  );
};

export default SignIn;
