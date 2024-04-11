import { Link } from "react-router-dom";
import Sms from "../Icons/Sms";
import { useState } from "react";

export default function TweetAction(props) {
  const [state, setState] = useState(false);
  function handleState() {
    setState(!state);
  }

  return (
    <div
      className="tweet-action"
      onMouseEnter={handleState}
      onMouseLeave={handleState}
      onClick={props.setLiked}
    >
      {state ? props.onsvg : props.svg}
      <span style={{ color: state && props.color }}>{props.value}</span>
    </div>
  );
}
