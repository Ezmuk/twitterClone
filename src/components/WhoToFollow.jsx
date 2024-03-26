import TrendsFuTitle from "./TrendsFuTitle";
import cnn from "../assets/cnn.svg";
import avat from "../assets/avat.svg";
import tweetlogo from "../assets/tweetlogo.svg";
import SousFollow from "./SousFollow";

import ShowMore from "./ShowMore"
export default function WhotoFollow(props) {
  const follows = [
    {
      id: "01",
      img: avat,
      owner: { title1: "The new york times", title2: "@nytimes" },
    },
    { id: "02", img: cnn, owner: { title1: "CNN", title2: "@CNN" } },
    { id: "03", img: tweetlogo, owner: { title1: "Twitter", title2: "@Twitter" } },
   
  ];
  return (
    <div className="whofollow">
      <TrendsFuTitle value="Who to follow" />
      {follows.map((follow, index) => (
        <SousFollow key={index} img={follow.img} value={follow.owner} />
      ))}
        <ShowMore/>
    </div>
  );
}
