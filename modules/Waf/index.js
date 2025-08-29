import fp from "fastify-plugin";
import { preHandlerHook, onRequestHook } from "./wafHooks.js";

async function wafPlugin(fastify, options) {
  fastify.addHook("onRequest", onRequestHook);
  fastify.addHook("preHandler", preHandlerHook);
}

export default fp(wafPlugin);
