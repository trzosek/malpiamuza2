import { NextResponse } from "next/server"
import {hash} from "bcrypt"
import { prisma } from "@/app/prisma"

interface RequestData {
    email: string;
    name: string;
    password: string;
    password2: string;
  }

export async function POST(request: Request) {
    try {
        const {email,name,password,password2} : RequestData = await request.json()
        console.log({email,name,password,password2})

        const hashedPassword = await hash(password,10)

        const response = await prisma.user.create({
            data: {
                Name: name,
                Email: email,
                Password: hashedPassword

            },
        })
        if (response) console.log('stworzono uzytkownika')
        else console.log('cos poszlo nie tak')
    } catch (e) {
        console.log(e)
    }
    return NextResponse.json({message:'succes'})
}