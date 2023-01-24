import NextAuth, { Session, type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import EmailProvider from "next-auth/providers/email";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";
import { User } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    async session({ session, user }: any) {
      if (session.user) {
        session.user.id = user.id;
        session.user.protusId = user.protusId;
        session.user.onBoarded = user.onBoarded;
      }

      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    EmailProvider({
      server: {
        host: env.EMAIL_HOST,
        port: 25,
        auth: {
          user: env.EMAIL_USERNAME,
          pass: env.EMAIL_PASSWORD,
        },
      },
      from: env.EMAIL_FROM,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
