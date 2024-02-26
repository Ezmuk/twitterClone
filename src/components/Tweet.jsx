import TweetAvatar from "./TweetAvatar"
import avat from "../assets/avat.svg"
import TweetContent from "./TweetContent"
export default function Tweet(props){
    
    return(
        <div className="tweet">
            <TweetAvatar img={props.value["tweet-avatar"]} />
            <TweetContent value={props.value["tweet-content"]} />
        </div>
    )
}