/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');

const URL_PREFIX = `http://localhost:3000`;
const PAGES_SOURCE = path.join(__dirname, 'src', 'pages', '/**/*.tsx');

const url = [];
const diskPages = glob.sync(PAGES_SOURCE);

diskPages.forEach((page) => {
  const pagePath = page
    .replace(path.join(__dirname, 'src', 'pages'), '')
    .replace(/.tsx$/, '')
    .replace('index', '');
  if (
    pagePath.includes('_app') ||
    pagePath.includes('_document') ||
    pagePath.includes('_error') ||
    pagePath.includes('api') ||
    pagePath.includes('404')
  ) {
    return;
  }

  const pageUrl = `${URL_PREFIX}${pagePath}`;

  url.push(pageUrl);
});

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start',
      startServerReadyPattern: 'ready on',
      url,
    },
    assert: {
      preset: 'lighthouse:no-pwa',
    },
  },
};
