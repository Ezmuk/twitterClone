import TweetActions from "./TweetActions";
import TweetBody from "./TweetBody";
export default function TweetContent(props){
    return(
        <div className="tweet-content">
            <TweetBody value={props.value["tweet-body"]}/>
            <TweetActions value={props.value["tweet-actions"]} />
        </div>
    )
}