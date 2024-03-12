import NextAuth from "next-auth/next";
// import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: "161bbf312f1a7e6816d1",
            clientSecret: "cd2bc011eff43a83ae9f6dc3aa75a30bf8837788"
        })
    ]
})
export { handler as GET, handler as POST }