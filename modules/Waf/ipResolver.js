import { getAdrr, getDetails } from "../../utils/getIP.js";
import { LRUCache } from "lru-cache";

const cache = new LRUCache({
  max: 10000,
  ttl: 1000 * 60 * 60,
  updateAgeOnGet: true,
  updateAgeOnHas: true,
});

const getIPInfo = async (req) => {
  let ip = req.ip;

  // Resolve localhost to external addr
  if (ip === "::1" || ip === "127.0.0.1") {
    ip = await getAdrr();
  }

  if (cache.has(ip)) {
    const cached = cache.get(ip);
    console.log(`[CACHE HIT] IP: ${ip}, Country: ${cached?.country}`);
    return cached;
  }

  const details = await getDetails(ip);
  console.log(`[RESOLVED] IP: ${ip}, Country: ${details?.country || "UNKNOWN"}`);
  cache.set(ip, details);
  return details;
};

export { getIPInfo };
