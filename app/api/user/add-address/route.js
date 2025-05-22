import {getAuth} from "@clerk/nextjs/server";
import connectDB from "@/config/mongodb";
import Address from "@/models/Address";
import {NextResponse} from "next/server";

export async function POST(request) {
    try {
        const {userId} = getAuth(request)
        const {address} = await request.json()

        await connectDB()
        const newAddress = await Address.create({...address, userId})

        return NextResponse.json({success: true, message: 'Address added successfully', address: newAddress})

    } catch (e) {
        return NextResponse.json({success: false, message: `Address not added with error: ${e.message}`})
    }
}