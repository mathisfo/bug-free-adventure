import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <Button onClick={() => signIn("discord")}>Sign in with Discord</Button>
      <Button
        onClick={() =>
          signIn("email", {
            email: "mathias.s.fossum@gmail.com",
            callbackUrl: "/dashboard",
          })
        }
      >
        Sign in With Mail
      </Button>
    </div>
  );
};

export default SignIn;
