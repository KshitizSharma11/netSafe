import axios from "axios";

export const getAdrr=async ()=>{
  const result = await axios.get("https://api.ipify.org?format=json");
  return result.data.ip;
}

export const getDetails =async (adrr)=>{
  const result = await axios.get(`http://ip-api.com/json/${adrr}`);
  const obj = {
    
    
    region: result.data.regionName,
    country: result.data.country,
    
  };
  return obj;
}