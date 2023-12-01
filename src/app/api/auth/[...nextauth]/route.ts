import { prisma } from "@/app/prisma";
import { compare } from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/login',
  },
    providers: [
        CredentialsProvider({
          credentials: {
            email: { },
            password: { }
          },
          async authorize(credentials, req) {
            // console.log(credentials)
            const user = await prisma.user.findFirst({
                where: {
                    Email: credentials?.email
                }
            })
            if (user) {
              const passwordCorrect = await compare(credentials?.password || "",user.Password)
              if (passwordCorrect) {
                return {
                  id: `${user.UserID}`,
                  email: user.Email,
                  name: user.Name,
                  role: user.Role
                };
              }
            }
            
            return null
            
          }
          
        })
      ]
})
export {handler as GET, handler as POST}