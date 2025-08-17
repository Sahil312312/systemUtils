import axios from "axios";

export const getRequest = async (query = "") => {
  let url = import.meta.env.VITE_API_URL;
  try {
    if (query) {
      // Remove leading '&' if present
      if (query.startsWith("&")) query = query.slice(1);

      url += "?" + query; // first ? then rest of query
    }
    const response = await axios.get(`${url}/healthCheckData`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_AUTH} `,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postRequest = async (payload = {}) => {
  let url = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.post(
      `${url}/healthCheckfilteredData`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_AUTH} `,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
