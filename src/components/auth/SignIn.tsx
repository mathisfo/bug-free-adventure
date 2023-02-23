import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";
import ToggleTheme from "../ToggleTheme";
import { AiOutlineGithub } from "react-icons/ai";

const SignIn = () => {
  return (
    <div className="signin-background fixed h-full w-full">
      <div className="course-card mx-auto my-24 h-3/5 w-1/3 rounded-lg">
        <div className="grid justify-items-end p-8">
          <ToggleTheme />
        </div>
        <div className="px-16 pt-12">
          <p className="text-color text-4xl font-semibold">Hey! 👋🏻</p>
          <p className="text-color">
            Please sign in using your GitHub account.
          </p>
          <div className="grid pt-8 ">
            <Button
              className="my-2 place-self-center bg-[#988efe]"
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            >
              <AiOutlineGithub className="mr-2 h-6 w-6 " /> Sign in with Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
