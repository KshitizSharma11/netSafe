import { getAdrr, getDetails } from "../../../utils/getIP.js";
import LRU from 'lru-cache';
let cache = new LRU({
max : 10000,
ttl: 1000 * 60 * 60 ,
updateAgeOnGet: true,   
  updateAgeOnHas: true
});
const getIPInfo = async (req, reply) => {

  let ip = req.ip;
  if(ip === "::1" || ip =="127.0.0.1" )
  {
    ip = await getAdrr();
  }
    if(cache.has(ip))
        reply.send(cache.get(ip));
    
  const details = await getDetails(ip);
  cache.set(ip, details);
  reply.send(details);
};
const InterceptCont={
    getIPInfo
}
export default InterceptCont;