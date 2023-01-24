import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import ToggleTheme from "../ToggleTheme";

const SignIn = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="back-layer dark:dark-back-layer fixed h-full w-full ">
      <div className="mx-auto my-24 h-3/4 w-1/2 rounded-lg bg-white dark:bg-[#292e50]">
        <div className="grid justify-items-end p-8">
          <ToggleTheme />
        </div>
        <div className="px-16 pt-16">
          <p className="text-color text-4xl font-semibold">Hey!</p>
          <p className="text-color">Please enter your university email</p>
          <p className="text-color pt-8 font-semibold">Email</p>
          <input
            type="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-300 dark:border-gray-600 dark:bg-slate-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="john.doe@company.com"
            required
          ></input>
          <div className="mt-8 grid justify-items-center">
            <Button
              className="bg-sky-500 from-[#6e69ed] to-[#ab5cfb] dark:bg-gradient-to-tr"
              onClick={() => signIn()}
            >
              Sign in Providers
            </Button>
            <Button
              className="bg-sky-500 from-[#6e69ed] to-[#ab5cfb] dark:bg-gradient-to-tr"
              onClick={() =>
                signIn("email", {
                  email: email,
                  callbackUrl: "/dashboard",
                })
              }
            >
              Sign in with email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
