import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  // Only protect the /Schedule route
  if (pathname === "/Schedule") {
    const sessionCookie = req.cookies.get("wos-session");

    // If the session cookie is missing, fetch the login URL from /api/login
    if (!sessionCookie) {
      try {
        // Fetch the login URL from /api/login
        const loginResponse = await fetch(new URL("/api/login", req.url), {
          method: "GET",
        });

        if (!loginResponse.ok) {
          console.error("Failed to fetch login URL:", await loginResponse.text());
          return NextResponse.redirect(new URL("/error", req.url)); // Optional error handling
        }

        const { url: loginUrl } = await loginResponse.json();

        if (loginUrl) {
          // Redirect to the fetched login URL
          return NextResponse.redirect(loginUrl);
        }
      } catch (error) {
        console.error("Error fetching login URL:", error);
        return NextResponse.redirect(new URL("/error", req.url)); // Optional error handling
      }
    }
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}

// Apply the middleware to the /Schedule route
export const config = {
  matcher: ["/Schedule"],
};
