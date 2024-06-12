import { authMiddleware, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// export default clerkMiddleware();


// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
// const isProtectedRoute = createRouteMatcher([
//     '/dashboard(.*)',
    
//   ]);
export default authMiddleware({
  publicRoutes:["/","/sign-in","/api/webhooks/clerk"]
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

