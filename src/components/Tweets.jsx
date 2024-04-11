import Tweet from "./Tweet";
import { useContext } from "react";
import { TweetContext } from "../context/context";

export default function Tweets() {
  const { post } = useContext(TweetContext);
  return (
    <div className="tweets">
      {post.map((item) => (
        <Tweet key={item.id} value={item} />
      ))}
    </div>
  );
}
