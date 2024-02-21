import TweetBody from "./TweetBody"
import TweetAction from "./TweetAction"




export default function TweetContent(){
    return(<>
    <div className="tweet-content">
      <TweetBody />  
  <TweetAction/>
  </div>
    </>)
}