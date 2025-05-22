import {NextResponse} from "next/server";
import {getAuth} from "@clerk/nextjs/server";
import connectDB from "@/config/mongodb";
import Address from "@/models/Address";

export async function GET(request) {
    try {
        const {userId} = getAuth(request)
        await connectDB()
        const getAddress = await Address.find({userId})

        return NextResponse.json({success: true, addresses: getAddress})

    } catch (e) {
        return NextResponse.json({success: false, message: `Error Fetching Address for user: ${e.message}`})
    }
}