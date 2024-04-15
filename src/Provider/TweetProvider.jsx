import React, { useState } from "react";
import { TweetContext } from "../context/context";
import axios from "axios";

export default function TweetProvider({ children }) {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  axios
    .get("http://localhost:3000/tweets")
    .then((response) => {
      setPost(response.data);
    })
    .catch((error) => {
      setError(error);
    });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <TweetContext.Provider value={{ post, setPost }}>
      {children}
    </TweetContext.Provider>
  );
}
