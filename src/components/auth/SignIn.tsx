import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import ToggleTheme from "../ToggleTheme";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [signUp, setSignUp] = useState(false);

  function resetPassword(
    arg0: string,
    arg1: { email: string; callbackUrl: string }
  ): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="back-layer dark:dark-back-layer fixed h-full w-full ">
      <div className="mx-auto my-24 h-3/4 w-1/2 rounded-lg bg-white dark:bg-[#292e50]">
        <div className="grid justify-items-end p-8">
          <ToggleTheme />
        </div>
        {forgotPassword == false && signUp == false ? (
          <div className="px-16 pt-12">
            <p className="text-color text-4xl font-semibold">Hey!</p>
            <p className="text-color">
              Please log in using your university email
            </p>
            <p className="text-color pt-8 font-semibold">Email</p>
            <input
              type="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-300 dark:border-gray-600 dark:bg-slate-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=""
              required
            ></input>
            <p className="text-color pt-4 font-semibold">Password</p>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-300 dark:border-gray-600 dark:bg-slate-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=""
              required
            ></input>
            <p
              className="text-color grid justify-items-end pt-2 text-sm font-semibold underline hover:cursor-pointer"
              onClick={() => setForgotPassword(true)}
            >
              Forgot your password?
            </p>
            <div className="mt-4 grid justify-items-center">
              <Button
                className="bg-sky-500 from-[#6e69ed] to-[#ab5cfb] dark:bg-gradient-to-tr"
                onClick={() =>
                  signIn("email", {
                    email: email,
                    callbackUrl: "/dashboard",
                  })
                }
              >
                Log in
              </Button>
              <Button
                className="bg-sky-500 from-[#6e69ed] to-[#ab5cfb] dark:bg-gradient-to-tr"
                onClick={() => signIn()}
              >
                Sign in Providers
              </Button>
              <div className="flex flex-row">
                <p className="text-color pt-5  text-sm">
                  Don't have an account yet?
                </p>
                <p
                  className="text-color px-1 pt-5 text-sm font-semibold underline hover:cursor-pointer"
                  onClick={() => setSignUp(true)}
                >
                  Sign up!
                </p>
              </div>
            </div>
          </div>
        ) : forgotPassword ? (
          <div className="px-16 pt-12">
            <p className="text-color text-2xl font-semibold">Reset password</p>
            <p className="text-color">It's okay! We all forget sometimes 💙</p>
            <p className="text-color pt-8 font-semibold">Email</p>
            <input
              type="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-300 dark:border-gray-600 dark:bg-slate-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=""
              required
            ></input>
            <div className="mt-4 grid justify-items-center">
              <Button
                className="bg-sky-500 from-[#6e69ed] to-[#ab5cfb] dark:bg-gradient-to-tr"
                onClick={() =>
                  resetPassword("email", {
                    email: email,
                    callbackUrl: "",
                  })
                }
              >
                Reset password
              </Button>
            </div>
          </div>
        ) : (
          <div className="px-16 pt-12">
            <p className="text-color text-2xl font-semibold">Welcome!</p>
            <p className="text-color">
              We just need your university email and we'll send you a magic link
              ✨
            </p>
            <p className="text-color pt-8 font-semibold">Email</p>
            <input
              type="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-300 dark:border-gray-600 dark:bg-slate-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=""
              required
            ></input>
            <div className="mt-4 grid justify-items-center">
              <Button
                className="bg-sky-500 from-[#6e69ed] to-[#ab5cfb] dark:bg-gradient-to-tr"
                onClick={() =>
                  signIn("email", {
                    email: email,
                    callbackUrl: "",
                  })
                }
              >
                Sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
