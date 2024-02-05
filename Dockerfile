# Stage 1: Build stage
FROM node:21-alpine as builder

# Create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# Copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/

# Enable Corepack (if necessary, based on your project requirements)
RUN corepack enable

# Install dependencies and build the app
RUN yarn install && yarn build

# Stage 2: Run stage
FROM node:21-alpine

# Set the working directory
WORKDIR /usr/src/nuxt-app

# Copy the built app from the builder stage
# COPY --from=builder /usr/src/nuxt-app/.nuxt ./.nuxt
# COPY --from=builder /usr/src/nuxt-app/static ./static
# COPY --from=builder /usr/src/nuxt-app/package.json ./package.json
# COPY --from=builder /usr/src/nuxt-app/yarn.lock ./yarn.lock
COPY --from=builder /usr/src/nuxt-app/.output ./.output

# Expose the necessary ports
EXPOSE 3000 4000

# Set environment variables
ENV NUXT_PORT=3000

# Command to run the application
CMD ["node", ".output/server/index.mjs"]
