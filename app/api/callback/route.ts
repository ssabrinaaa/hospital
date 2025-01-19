import { NextResponse } from 'next/server';
import { WorkOS } from '@workos-inc/node';
import cookie from 'cookie';

const workos = new WorkOS(process.env.WORKOS_API_KEY || '');

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    const { sealedSession } = await workos.userManagement.authenticateWithCode({
      code,
      clientId: process.env.WORKOS_CLIENT_ID || '',
      session: {
        sealSession: true,
        cookiePassword: process.env.WORKOS_COOKIE_PASSWORD || '',
      },
    });
    
    console.log("Sealed Session:", sealedSession);
    

    if (!sealedSession) {
      console.error('Sealed session is undefined.');
      return NextResponse.json({ error: 'Failed to generate session.' }, { status: 500 });
    }

    // Store the session in a cookie
    const response = NextResponse.redirect(new URL('/Schedule', req.url));
    response.cookies.set('wos-session', sealedSession, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
    return response;
    
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.redirect(new URL('/api/login', req.url));
  }
}
