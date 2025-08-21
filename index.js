import http from "http";
import axios from "axios";

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  try {
    let clientIp = req.socket.remoteAddress;

    // If request is from localhost (::1 or 127.0.0.1), fetch public IP
    if (clientIp === "::1" || clientIp === "127.0.0.1") {
      const ipResp = await axios.get("https://api.ipify.org?format=json");
      clientIp = ipResp.data.ip;
    }

    // Now get geolocation of that IP
    const geoResp = await axios.get(`http://ip-api.com/json/${clientIp}`);

    res.end(JSON.stringify(geoResp.data, null, 2));
  } catch (err) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message }));
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
