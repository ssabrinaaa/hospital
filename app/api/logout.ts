import type { NextApiRequest, NextApiResponse } from 'next';
import { WorkOS } from '@workos-inc/node';
import cookie from 'cookie';

const workos = new WorkOS(process.env.WORKOS_API_KEY || '');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  const sealedSession = cookies['wos-session'];

  if (!sealedSession) {
    return res.redirect('/');
  }

  try {
    const session = workos.userManagement.loadSealedSession({
      sessionData: sealedSession,
      cookiePassword: process.env.WORKOS_COOKIE_PASSWORD || '',
    });

    const logoutUrl = await session.getLogoutUrl();

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('wos-session', '', {
        path: '/',
        expires: new Date(0), // Clear the cookie
      })
    );

    return res.redirect(logoutUrl);
  } catch (error) {
    console.error('Logout error:', error);
    return res.redirect('/');
  }
};

export default handler;
