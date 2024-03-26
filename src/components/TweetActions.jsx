import TweetAction from "./TweetAction";
import love from "../assets/love.svg";
import repub from "../assets/repub.svg";
import share from "../assets/Share.svg";
import sms from "../assets/sms.svg";
export default function TweetActions(props) {
  return (
    <div className="tweet-actions">
      <TweetAction svg={sms} value={props.value.reply} />
      <TweetAction svg={repub} value={props.value.retweet} />
      <TweetAction svg={love} value={props.value.react} />
      <TweetAction svg={share} />
    </div>
  );
}
