import TweetTitle from "./TweetTitle"
import TweetText from "./TweetText"
import image from "../assets/Img.svg"
import TweetImage from "./TweetImage"
export default function TweetBody(props){
    return(
        <div className="tweet-body">
           <TweetTitle value={props.value["tweet-title"]}/>
           <TweetText value={props.value["tweet-text"]}/>
           <TweetImage value={props.value["tweet-image"]}/>
        </div>
    )
}