import {getAuth} from "@clerk/nextjs/server";
import connectDB from "@/config/mongodb";
import User from "@/models/User";
import {NextResponse} from "next/server";

export async function GET(request) {
    try {
        const {userId} = getAuth(request)

        await connectDB()
        const userData = await User.findById(userId)
        if (!userData) return NextResponse.json({success: false, message: 'User data not found'})

        const {cartItems} = userData

        return NextResponse.json({success: true, cartItems})

    } catch (e) {
        return NextResponse.json({
            success: false,
            message: `Error occurred when fetching cart items from DB: ${e.message}`
        })
    }
}