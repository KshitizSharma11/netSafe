import { getAdrr, getDetails } from "../../../utils/getIP.js";

const getIPInfo = async (req, reply) => {

  let ip = req.ip;
  if(ip === "::1" || ip =="127.0.0.1" )
  {
    ip = await getAdrr();
  }
  const details = await getDetails(ip);
  reply.send(details);
};
const InterceptCont={
    getIPInfo
}
export default InterceptCont;