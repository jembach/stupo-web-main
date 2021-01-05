module.exports = {
  branches: ['main', { name: 'staging', prerelease: true }],
  verifyConditions: ['@semantic-release/changelog', '@semantic-release/git'],
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    {
      path: '@semantic-release/exec',
      cmd: 'yarn run build',
    },
    {
      path: '@semantic-release/git',
      assets: ['CHANGELOG.md', 'package.json', 'yarn.lock'],
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    [
      '@eclass/semantic-release-sentry-releases',
      {
        sourcemaps: '.next',
        urlPrefix: '~/_next',
        environment: process.env.SENTRY_ENV,
        repositoryUrl: process.env.REPOSITORY,
        tagsUrl: `https://github.com/${process.env.REPOSITORY}/releases/tag`,
        releasePrefix: process.env.SENTRY_PROJECT,
      },
    ],
  ],
};
