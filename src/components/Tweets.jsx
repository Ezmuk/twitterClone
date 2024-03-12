import Tweet from "./Tweet";
import tweets from "../Data/data_tweets";
export default function Tweets(){
 
    
    return(
        <div className="tweets">
            {tweets.map((item)=>
            <Tweet key={item.id} value={item} />)}
            
        </div>
    )
}