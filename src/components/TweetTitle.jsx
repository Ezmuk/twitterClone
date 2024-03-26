import TweetTitleAuthor from "./TweetTitleAuthor"
import Verified from "../assets/Verified.svg" 
import TweetTitleDetails from "./TweetTitleDetails"
import { Link } from "react-router-dom"
export default function TweetTitle(props){
   
    return(
        <Link to={props.value["tweet-author"]} className="tweet-title" style={{textDecoration:"none",color:"white"}}>
           <TweetTitleAuthor value={props.value["tweet-title-author"]}/>
           <img src={Verified}/>
           <TweetTitleDetails title={props.value["tweet-author"]} />
           <TweetTitleDetails title="."/>
           <TweetTitleDetails title={props.value["tweet-time"]}/>
        </Link>
    )
}