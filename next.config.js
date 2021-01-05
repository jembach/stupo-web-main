/* eslint-disable @typescript-eslint/no-var-requires */
// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer(
  withPreact({
    poweredByHeader: false,
  })
);

module.exports = nextConfig;
