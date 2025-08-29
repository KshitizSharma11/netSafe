import { isBlocked } from "./blacklist.js";
import { sanitizeRequest } from "./sanitizer.js";
import { getIPInfo } from "./ipResolver.js";

async function onRequestHook(req, reply) {
  const ipInfo = await getIPInfo(req);

  if (!ipInfo) {
    console.log(`[WAF] Failed to resolve IP for request to ${req.url}`);
    reply.code(403).send({ error: "Unable to resolve IP" });
    return;
  }

  console.log(`[WAF] Incoming request → IP: ${ipInfo.ip}, Country: ${ipInfo.country}, URL: ${req.url}`);

  if (isBlocked(ipInfo.country)) {
    console.log(`[WAF BLOCKED] IP: ${ipInfo.ip}, Country: ${ipInfo.country}`);
    reply.code(403).send({ error: `Access denied from ${ipInfo.country}` });
    return;
  }

  // if not blocked → continue
}

async function preHandlerHook(req) {
  sanitizeRequest(req);
}

export { onRequestHook, preHandlerHook };
