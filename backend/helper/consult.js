import fetch from "node-fetch";

export const consultarAPi = async () => {
  const URL = "https://www.bitmex.com/api/v1/announcement";
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};
