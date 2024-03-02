import { auth } from "./auth"

export default auth((req) => {
    const isLogged = !!req.auth;
  // req.auth
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
