import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  console.log('Middleware running...');
  console.log('Token:', token);

  if (!token) {
    console.log('No token found, redirecting...');
    const response = NextResponse.redirect(new URL('/sign-in', request.url));
    response.headers.set('Cache-Control', 'no-store'); 
    return response;
  }

  console.log('Token found, allowing access.');
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
