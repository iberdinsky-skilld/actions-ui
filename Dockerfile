# Dockerfile
FROM node:21-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN corepack enable
RUN yarn install

EXPOSE 3000 4000

ENV NUXT_PORT=3000

CMD [ "yarn", "dev" ]