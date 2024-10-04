FROM oven/bun:latest AS deps
WORKDIR /app
COPY bun.lockb package.json .npmrc ./
RUN bun install

FROM deps AS build
COPY --from=deps /app/node_modules node_modules
COPY . .
RUN bun run build --frozen-lockfile

EXPOSE 8082

FROM build AS runner
CMD ["bun", "server/index.ts"]
