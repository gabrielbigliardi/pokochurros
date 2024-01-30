import { User } from "@/app/_models/User"
import { genSaltSync, hashSync } from "bcrypt"
import mongoose from "mongoose"

export async function POST(req: Request) {
    const body = await req.json()

    const pass = body.password
    mongoose.connect(process.env.MONGO_URL as string)

    if (!pass?.length || pass?.length < 5) {
        new Error('Password must be at least 5 characters')
    }


    const unhashedPassword = pass
    const salt = genSaltSync(10)
    body.password = hashSync(unhashedPassword, salt)



    const createdUser = await User.create(body)



    return Response.json(createdUser)
}