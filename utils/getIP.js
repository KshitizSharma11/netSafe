import axios from "axios";

export const getAdrr=async ()=>{
  const result = await axios.get("https://api.ipify.org?format=json");
  return result;
}

export const getDetails =async (adrr)=>{
  const result = await axios.get(`http://ip-api.com/json/${$adrr}`);
  return result;
}