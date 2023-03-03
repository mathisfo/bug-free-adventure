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
    {
      id: "lti",
      name: "LTI Integration",
      type: "oauth",
      clientSecret: env.LTI_CLIENT_SECRET,
      clientId: env.LTI_CLIENT_ID,
      authorization: {},
      version: "2.0",
      accessTokenUrl: "https://kauth.kakao.com/oauth/token",

      token: {
        url: "http://localhost:8888/moodle401/mod/lti/token.php",
        params: {
          oauth_callback: "about:blank",
          oauth_consumer_key: env.LTI_CLIENT_ID,
          access_token: "9fccb1f206d5c587c2079abf9f0504d8",
          oauth_signature: env.LTI_CLIENT_SECRET,
          oauth_nonce: "1234567890",
          oauth_signature_method: "HMAC-SHA1",
          oauth_timestamp: "1234567890",
          oauth_version: "2.0",
        },
      },
      userinfo: "https://kapi.kakao.com/v2/user/me",
      profile(profile) {
        return {
          id: profile.id,
          name: profile.kakao_account?.profile.nickname,
          email: profile.kakao_account?.email,
          image: profile.kakao_account?.profile.profile_image_url,
        };
      },
    },
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
