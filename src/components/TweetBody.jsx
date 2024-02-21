import TweetText from "./TweetText"
import TweetImage from "./TweetImage"
import TweetTitle from "./TweetTitle"

export default function TweetBody(){
  return(  <>
  <div className="tweet-body">
  <TweetTitle />
  <TweetText/>
  <TweetImage/>
  </div>
  </>
  )}