import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { platform } from "os";
import { PassThrough } from "stream";
import { CgPassword } from "react-icons/cg";
import Email from "next-auth/providers/email";

export const options: NextAuthOptions={
    providers:[
        GithubProvider({
                    clientId: process.env.GITHUB_ID!,
                    clientSecret: process.env.GITHUB_SECRET!,
                }),
                GoogleProvider({
                    clientId: process.env.GOOGLE_CLIENT_ID!,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
                }),
                CredentialsProvider({
                    name:' Credentials',
                    credentials:{
                        username: {
                            label:'UserName',
                            type:'text',
                            placeholder:'Enter  UserName'
                        },
                        Email: {
                            label:'Email',
                            type:'email',
                            placeholder:'Enter Your Email' 
                        },
                        passsword:{
                            label: 'Password',
                            type:'Password',
                            placeholder:'Enter your Password',
                        },
                    },
                    async authorize(credentials){
                           const user = {id:"1", email:'zohaibabubakar21@gmail.com', name:"abubakar", password:"lol@8765"}
                           if (
                            credentials?.username === user.name && 
                            credentials?.Email === user.email && 
                            credentials?.passsword == user.password
                        ) {
                     return user;
                           }else{
                            return null;
                           }
                    }
                }),
    ],
}
