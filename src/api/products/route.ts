import { NextResponse } from "next/server";
import productData from "@/app/product/[slug]/page";

export const GET = async()=>{
   try {
    return NextResponse.json({
        messsage:'Products fetched successfully',
        success: true,
        productData,
    });
   } catch (error) {
      return NextResponse.json({
        error:'Product Loading Error',
      },
      {status:500}
    );
   }
};