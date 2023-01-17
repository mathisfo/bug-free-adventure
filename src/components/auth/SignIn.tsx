import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <Button
      className="bg-sky-500 from-[#6e69ed] to-[#ab5cfb] dark:bg-gradient-to-tr"
      onClick={() => signIn("email", { email: "jtronstad@gmail.com" })}
    >
      Sign in
    </Button>
  );
};

export default SignIn;
