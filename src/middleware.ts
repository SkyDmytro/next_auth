import { getServerSession } from '@/lib/auth/session';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { user } = await getServerSession();
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');

  if (!user && !isAuthPage) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (user && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
