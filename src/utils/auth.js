import NextAuth from "next-auth"
import Github from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Configure one or more authentication providers
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});