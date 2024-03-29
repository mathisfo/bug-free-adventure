import GitHubProvider from "next-auth/providers/github";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";
import NextAuth, { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    async session({ session, user }: any) {
      if (session.user) {
        session.user.id = user.id;
        session.user.protusId = user.protusId;
        session.user.onBoarded = user.onBoarded;
        session.user.USNEmail = user.USNEmail;
        session.user.leaderboard = user.leaderboard;
      }

      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
