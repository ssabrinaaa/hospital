import { NextResponse } from 'next/server';
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY || '');

export async function GET(req: Request) {
  try {
    // Generate the WorkOS login URL
    const authorizationUrl = workos.userManagement.getAuthorizationUrl({
      provider: 'authkit', // Or 'sso' if you're using SSO
      redirectUri: process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI || '',
      clientId: process.env.WORKOS_CLIENT_ID || '',
    });

    const response = NextResponse.json({ url: authorizationUrl });

    // Add CORS headers to allow the frontend to make the request
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
  } catch (error) {
    console.error('Error generating WorkOS authorization URL:', error);
    return NextResponse.json({ error: 'Failed to generate login URL' }, { status: 500 });
  }
}
