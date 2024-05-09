import React, { useState, useEffect } from "react";
import { TweetContext } from "../context/context";
import axios from "axios";
import useFetch from "../hooks/useFetch";

export default function TweetProvider({ children }) {
  const [post, setPost] = useState([]);
  const { data, isPending } = useFetch(
    "https://twitterbackend-3ci6.onrender.com/tweets"
  );

  useEffect(() => {
    setPost(data);
  }, [data]);
  console.log("post", post);

  return (
    <TweetContext.Provider value={{ post, setPost, isPending }}>
      {children}
    </TweetContext.Provider>
  );
}
