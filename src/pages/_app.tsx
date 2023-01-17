// src/pages/_app.tsx
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import { SessionProvider } from "next-auth/react";
import superjson from "superjson";
import type { AppType } from "next/app";
import type { AppRouter } from "../server/router";
import type { Session } from "next-auth";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Sidebar from "../components/Sidebar";
import SignIn from "../components/auth/SignIn";
import ToggleTheme from "../components/ToggleTheme";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <SessionProvider session={session}>
        {session ? (
          <div className="fixed w-full">
            <style global jsx>{`
              html,
              body {
                height: 100%;
                overflow: hidden;
                position: fixed;
              }
            `}</style>
            <Sidebar>
              <Component {...pageProps} />
            </Sidebar>
          </div>
        ) : (
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
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-300 dark:border-gray-600 dark:bg-slate-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="john.doe@company.com"
                  required
                ></input>
                <div className="mt-8 grid justify-items-center">
                  <SignIn />
                </div>
              </div>
            </div>
          </div>
        )}
      </SessionProvider>
    </ThemeProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },

      // To use SSR properly you need to forward the client's headers to the server
      // headers: () => {
      //   if (ctx?.req) {
      //     const headers = ctx?.req?.headers;
      //     delete headers?.connection;
      //     return {
      //       ...headers,
      //       "x-ssr": "1",
      //     };
      //   }
      //   return {};
      // }
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
