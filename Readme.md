# How to use this template

## Files to modify

1. `package.json`

   - **description**

2. `src/pages/_app.tsx`

   - **DC.title**
   - **author**
   - **generator**

## Secrets that have to be defined in GitHub

1. Sentry

   - **SENTRY_PROJECT**
   - SENTRY_AUTH_TOKEN (already defined by github organisation)
   - SENTRY_ORG (already defined by github organisation)

2. Deployment to Dokku

   _Dokku deployment will only be executed if these secrets are set_

   - **DEPLOY_URL_PRODUCTION** (e.g. USERNAME@HOSTNAME:PROJECT_NAME-production)
   - **DEPLOY_URL_STAGING** (e.g. USERNAME@HOSTNAME:PROJECT_NAME-staging)
   - DEPLOY_PRIVATE_KEY (already defined by github organisation)
