import TweetTitleAuthor from "./TweetTitleAuthor"
import TweetTitleDetails from "./TweetTitleDetails"

export default function TweetTitle(){
return(
    <div className="tweet-title">
    <TweetTitleAuthor />
    <TweetTitleDetails />
    </div>
)
}