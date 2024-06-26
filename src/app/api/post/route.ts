import { Connection } from "@/app/mongodb/connection";
import { User } from "@/app/mongodb/userSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    await Connection();
    const user=new User(  { username: 'user1', email: 'user1@example.com', password: 'password1', profilePicture: '', bio: 'Bio for user1' })
    user.save();
    console.log(user);
    return NextResponse.json({message:"hello"})
}