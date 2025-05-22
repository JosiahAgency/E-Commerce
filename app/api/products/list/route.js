import {NextResponse} from "next/server";
import Product from "@/models/Product";
import connectDB from "@/config/mongodb";

export async function GET() {

    try {
        await connectDB()

        const products = await Product.find({})
        return NextResponse.json({success: true, products})

    } catch (e) {
        return NextResponse.json({success: false, message: `'Error getting products: '${e.message}`})
    }
}