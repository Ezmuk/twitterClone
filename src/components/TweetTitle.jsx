import TweetTitleAuthor from "./TweetTitleAuthor"
import Verified from "../assets/Verified.svg" 
import TweetTitleDetails from "./TweetTitleDetails"
export default function TweetTitle(props){
    return(
        <div className="tweet-title">
           <TweetTitleAuthor value={props.value["tweet-title-author"]}/>
           <img src={Verified}/>
           <TweetTitleDetails title={props.value["tweet-author"]} />
           <TweetTitleDetails title="."/>
           <TweetTitleDetails title={props.value["tweet-time"]}/>
        </div>
    )
}