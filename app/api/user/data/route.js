import {getAuth} from "@clerk/nextjs/server";
import connectDB from "@/config/mongodb";
import User from "@/models/User";
import {NextResponse} from "next/server";

export async function GET(request) {
    try {
        const {userId} = getAuth(request);

        await connectDB()
        const user = await User.findById(userId);


        if (!user) {
            return NextResponse.json({success: false, message: 'User not found'});
        }

        return NextResponse.json({success: true, user});

    } catch (e) {
        console.error(e);
        return NextResponse.json({success: false, message: e.message});
    }
}