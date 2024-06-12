import { Connection } from "@/app/mongodb/connection";
import { User } from "@/app/mongodb/userSchema";
import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
export async function GET(req:NextRequest) {
    await Connection();
    const { userId, sessionId, getToken } = getAuth(req);
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized", status: 401 });
      }
      let user = await User.findOne({ clerkId: userId });
   console.log(user);
    // const authuser=new User(  { username: 'user1', email: 'user1@example.com', password: 'password1', profilePicture: '', bio: 'Bio for user1' })
    return NextResponse.json({ message: "Authorized user", user });
   
}