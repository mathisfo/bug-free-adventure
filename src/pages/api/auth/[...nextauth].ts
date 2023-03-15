import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";
import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import { verify } from "jsonwebtoken";
import { sign } from "jsonwebtoken";
import { JWT } from "next-auth/jwt/types.js";

const decodeJwt = async (token: string) => {
  try {
    return verify(token, env.LTI_CLIENT_SECRET);
  } catch (error) {
    return null;
  }
};

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
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

    CredentialsProvider({
      name: "LTI",
      credentials: {},
      authorize: async (credentials: any) => {
        // The user object is already provided in the credentials object
        const user = credentials.user;

        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),

    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
