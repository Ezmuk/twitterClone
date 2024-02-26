import TweetAction from "./TweetAction"
import love from "../assets/love.svg"
import repub from "../assets/repub.svg"
import share from "../assets/Share.svg"
import sms from "../assets/sms.svg"
export default function TweetActions(props){
    console.log(props.value.react)
    return(
        <div className="tweet-actions"> 
        <TweetAction img={sms} value={props.value.reply}/>
        <TweetAction img={repub} value={props.value.retweet}/>
        <TweetAction img={love} value={props.value.react}/>
        <TweetAction img={share}/>
        </div>
    )
}