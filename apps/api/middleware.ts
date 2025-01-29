import { NextRequest, NextResponse } from 'next/server';
import { log } from '@repo/observability/log';

const allowedOrigins = (process.env?.ALLOWED_ORIGIN || '').split(',');

console.log('allowedOrigins: ', allowedOrigins);

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export function middleware(request: NextRequest) {
  // Check the origin from the request

  const origin = request.headers.get('origin') ?? '';
  log.info(`middleware: origin: ${origin}`);
  const isAllowedOrigin = allowedOrigins.includes(origin);
  log.info(`middleware, isAllowedOrigin: ${isAllowedOrigin}`);

  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS';

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    };
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  // Handle simple requests
  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: '/:path*',
};
