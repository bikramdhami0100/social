import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export default clerkMiddleware();


// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    
  ]);
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
// import {
//     clerkMiddleware,
//     createRouteMatcher
//   } from '@clerk/nextjs/server';
  
//   const isProtectedRoute = createRouteMatcher([
//     '/dashboard(.*)',
//     '/forum(.*)',
//   ]);
  
//   export default clerkMiddleware((auth, req) => {
//     if (isProtectedRoute(req)) auth().protect();
//   });
  
//   export const config = {
//     matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
//   };