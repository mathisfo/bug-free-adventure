// src/pages/_app.tsx
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppType } from "next/app";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { api } from "../utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <SessionProvider session={session}>
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
      </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
