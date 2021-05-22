const errorHandler = async (res) => {
    if (!res.ok) {
      throw res;
    }
  
    return res;
  };
  
  const parseResponse = async (res) => {
    const parsedRes = await res.json();
    if (parsedRes?.status === "ok") {
      return parsedRes.message;
    } else {
      throw parsedRes.message || parsedRes;
    }
  };
  
export const get = async (url) => {
    return await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(errorHandler)
      .then(res => res.json())
      .catch((error) => {
        throw error;
      });
  };