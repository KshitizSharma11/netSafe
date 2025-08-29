import fastify from "fastify";
const app = fastify();

import wafPlugin from "./modules/Waf/index.js";

app.register(wafPlugin);
app.get("/test-get", async (request, reply) => {
  return { message: "GET request passed WAF ✅" };
});

app.post("/test-post", async (request, reply) => {
  const body = request.body;
  return { message: "POST request passed WAF ✅", body };
});

app.listen({ port: 3000 }).then(() => {
  console.log("Server is running on http://localhost:3000");
});