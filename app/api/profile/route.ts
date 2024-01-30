import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/app/_models/User";

export async function PUT(req: any) {

    mongoose.connect(process.env.MONGO_URL as string)

    const data = await req.json()
    const session = await getServerSession<{}>(authOptions)
    const email = session?.user?.email


    await User.updateOne({ email }, data)

    return Response.json(true)
}

export async function GET() {
    mongoose.connect(process.env.MONGO_URL as string)

    const session = await getServerSession<{}>(authOptions)
    const email = session?.user?.email

    return Response.json(
        await User.findOne({ email })
    )

}