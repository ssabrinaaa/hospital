import { WorkOS } from "@workos-inc/node";
import { NextResponse } from "next/server";

const workos = new WorkOS(process.env.WORKOS_API_KEY || '', {
    clientId: process.env.WORKOS_CLIENT_ID || '', // Ensure the client ID is included
  });
  

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sessionData } = body;

    if (!sessionData) {
      return NextResponse.json(
        { authenticated: false, error: "Session data is missing." },
        { status: 400 }
      );
    }

    const session = workos.userManagement.loadSealedSession({
      sessionData,
      cookiePassword: process.env.WORKOS_COOKIE_PASSWORD || "",
    });

    const sessionResponse = await session.authenticate();

    if (sessionResponse.authenticated) {
      // TypeScript now knows `sessionResponse` is of type `AuthenticateWithSessionCookieSuccessResponse`
      return NextResponse.json({
        authenticated: true,
        user: {
          firstName: sessionResponse.user.firstName,
        },
      });
    } else {
      // TypeScript now knows `sessionResponse` is of type `AuthenticateWithSessionCookieFailedResponse`
      return NextResponse.json({
        authenticated: false,
        error: "Session is invalid or expired.",
      });
    }
  } catch (error) {
    console.error("Session validation error:", error);
    return NextResponse.json(
      { authenticated: false, error: "Failed to validate session." },
      { status: 500 }
    );
  }
}
