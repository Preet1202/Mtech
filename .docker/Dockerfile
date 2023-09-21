# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN mkdir -p /app
WORKDIR /app
COPY package.json ./
RUN npm install --unsafe-perm
# RUN npm install --frozen-lockfile

FROM node:16-alpine AS builder
ENV NODE_ENV production
RUN mkdir -p /app
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build


# Production image, copy all the files and run next
FROM node:16-alpine AS runner
RUN mkdir -p /app
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]