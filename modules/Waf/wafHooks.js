import { isBlocked } from "./blacklist.js";
import { sanitizeRequest } from "./sanitizer.js";
import { getIPInfo } from "./ipResolver.js";

async function onRequestHook(req, reply) {
  const ipInfo = await getIPInfo(req);

  if (!ipInfo) {
    reply.code(403).send({ error: "Unable to resolve IP" });
    return;
  }

  if (isBlocked(ipInfo.country)) {
    reply.code(403).send({ error: `Access denied from ${ipInfo.country}` });
    return;
  }

  // if not blocked → continue
}

async function preHandlerHook(req) {
  sanitizeRequest(req);
}

export { onRequestHook, preHandlerHook };
