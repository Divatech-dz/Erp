import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['backendgz.gamingzone.dz'],
  },
};

const sentryOptions = {
  org: 'divatech',
  project: 'javascript-nextjs',
  sentryUrl: 'https://sentry.io/',
  swcMinify: true,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryOptions);