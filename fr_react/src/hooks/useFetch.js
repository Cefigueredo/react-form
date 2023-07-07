import { useState } from "react";

export default function useFetch() {
  const fetchData = async (link, method, headers, body) => {
    if (body) {
      const response = await fetch(link, {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      });
      return await response.json();
    } else {
      const response_1 = await fetch(link, {
        method: method,
        headers: headers,
      });
      return await response_1.json();
    }
  };

  return { fetchData };
}
