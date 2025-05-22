import {getAuth} from "@clerk/nextjs/server";
import connectDB from "@/config/mongodb";
import User from "@/models/User";
import {NextResponse} from "next/server";

export async function POST(request) {
    try {
        const {userId} = getAuth(request)
        const {cartData} = await request.json()

        await connectDB()
        const user = await User.findById(userId)
        if (!user) return NextResponse.json({success: false, message: 'User data not found'})

        user.cartItems = cartData
        await user.save()

        return NextResponse.json({success: true, message: 'Cart updated successfully'})

    } catch (e) {
        return NextResponse.json({success: false, message: `Error when updating cart on DB: ${e.message}`})
    }
}