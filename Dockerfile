#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:14.8 AS builder

WORKDIR /usr/src/app

ENV NEXT_TELEMETRY_DISABLED=1

COPY . .

RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

RUN yarn install --frozen-lockfile --silent

# determine SENTRY_RELEASE and which type of SENTRY_ENV should be set based on version prefix
RUN export NEXT_PUBLIC_SENTRY_RELEASE=$(node -pe "require('./package.json').version") && \
    export NEXT_PUBLIC_SENTRY_PROJECT=$(node -pe "require('./package.json').name") && \
    export NEXT_PUBLIC_SENTRY_ENV=$(node -pe "process.env.NEXT_PUBLIC_SENTRY_RELEASE.includes('d') ? 'staging' : 'production'") && \
    echo "\nNEXT_PUBLIC_SENTRY_RELEASE=$NEXT_PUBLIC_SENTRY_RELEASE" >> .env.production && \
    echo "\nNEXT_PUBLIC_SENTRY_PROJECT=$NEXT_PUBLIC_SENTRY_PROJECT" >> .env.production && \
    echo "\nNEXT_PUBLIC_SENTRY_ENV=$NEXT_PUBLIC_SENTRY_ENV" >> .env.production

RUN yarn build

RUN yarn install --production --frozen-lockfile --silent && /usr/local/bin/node-prune && rm -rf src/

#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
FROM node:14.8-alpine

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

## We just need the build to execute the command
COPY --from=builder /usr/src/app/. .

CMD ["yarn", "start", "-p", "80"]
EXPOSE 80