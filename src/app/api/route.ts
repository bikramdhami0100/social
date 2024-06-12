
import { getAuth } from "@clerk/nextjs/server";
// import { currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user= getAuth(req);
  console.log(user)
//  const user=await currentUser();
  // if (!userId) {
  //   return NextResponse.json({ error: "Unauthorized",status:401 });
  // }
   
 
  NextResponse.json({message:"authorized user"});
}