import * as Sentry from '@sentry/node';

export default function sentryInit(): void {
  Sentry.init({
    enabled: !!process.env.NEXT_PUBLIC_SENTRY_RELEASE && !!process.env.NEXT_PUBLIC_SENTRY_DSN,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    release: `${process.env.NEXT_PUBLIC_SENTRY_PROJECT}-${process.env.NEXT_PUBLIC_SENTRY_RELEASE}`,
    environment: process.env.NEXT_PUBLIC_SENTRY_ENV,
  });
  Sentry.configureScope((scope) => {
    scope.setUser({ ip_address: undefined });
  });
}

export function captureException(error: Error): void {
  Sentry.captureException(error);
}
