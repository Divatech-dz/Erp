import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  if (!token && request.nextUrl.pathname !== '/sign-in') {
    console.log('Redirecting to /sign-in from middleware...');
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
  if(token && request.nextUrl.pathname === '/sign-in' ){
    return NextResponse.redirect(new URL('/', request.url));
   }
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'no-store');
  return response;
}

export const config = {
  matcher: ['/','/sign-in'],
};
