import {getAuth} from "@clerk/nextjs/server";
import connectDB from "@/config/mongodb";
import Address from "@/models/Address";
import Product from "@/models/Product";
import Order from "@/models/Order";
import {NextResponse} from "next/server";

export async function GET(request) {
    try {
        const {userId} = getAuth(request)

        await connectDB()
        Address.length
        Product.length

        const orders = await Order.find({userId}).populate('address items.product')
        return NextResponse.json({success: true, orders})

    } catch (e) {
        console.log(e)
        return NextResponse.json({success: false, message: `Error fetching orders: ${e.message}`})
    }
}