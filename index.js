import fastify from "fastify";
const app = fastify();
import Interceptor from "./modules/Interceptor/router/index.js";
app.register(Interceptor,{prefix: "/check"});
app.listen({ port: 3000 }).then(() => {
  console.log("Server is running on http://localhost:3000");
});