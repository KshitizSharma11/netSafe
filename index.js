import fastify from "fastify";
const app = fastify();

import wafPlugin from "./modules/Waf/index.js";

app.register(wafPlugin,{prefix: "/check"});
app.listen({ port: 3000 }).then(() => {
  console.log("Server is running on http://localhost:3000");
});