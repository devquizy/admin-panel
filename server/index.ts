Bun.serve({
  port: 8082,
  fetch() {
    return new Response(Bun.file("dist/index.html"));
  },
});
