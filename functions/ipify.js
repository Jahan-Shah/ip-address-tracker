import axios from "axios";

export async function handler(event) {
  const { input } = JSON.parse(event.body);
  const API = process.env.API_KEY
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API}&ipAddress=${input}`
  try {
    const response = await axios.get(url);
    const data = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    const { status, statusText, headers, data } = err.response;
    return {
      status,
      body: JSON.stringify({ status, statusText, headers, data })
    };
  }
};