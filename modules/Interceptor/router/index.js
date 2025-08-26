import InterceptCont from "../controller/index.js";

export default async function Interceptor(fastify, opts) {
  fastify.get("/", InterceptCont.getIPInfo);
}