FROM node:16-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm install --unsafe-perm

FROM node:16-alpine AS builder
ENV NODE_ENV production
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]  
