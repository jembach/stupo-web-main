/* eslint-disable @typescript-eslint/no-var-requires */
// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
const withSourceMaps = require('@zeit/next-source-maps');
const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer(
  withPreact({
    webpack(config, { isServer }) {
      if (!isServer) {
        // eslint-disable-next-line no-param-reassign
        config.resolve.alias['@sentry/node'] = '@sentry/browser';
      }
      return config;
    },
    poweredByHeader: false,
  })
);

module.exports = process.env.RELEASE !== undefined ? withSourceMaps(nextConfig) : nextConfig;
