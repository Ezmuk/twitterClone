import React, { useState } from "react";
import { TweetContext } from "../context/context";
import data from "../Data/initial-data.json";

export default function TweetProvider({ children }) {
  const donne = data.tweets;
  const [post, setPost] = useState(donne);

  return (
    <TweetContext.Provider value={{ post, setPost }}>
      {children}
    </TweetContext.Provider>
  );
}
