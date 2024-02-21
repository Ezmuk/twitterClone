import TweetText from "./TweetText"
import TweetImage from "./TweetImage"
import TweetTitle from "./TweetTitle"
import TweetAction from "./TweetAction"




export default function TweetContent(){
    return(<>
    <div className="tweet-content">
        <TweetTitle />
  <TweetText/>
  <TweetImage/>
  <TweetAction/>
  </div>
    </>)
}