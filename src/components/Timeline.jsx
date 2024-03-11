import Header from "./Header";
import TweetEditor from "./TweetEditor";
import Tweets from "./Tweets";

export default function Timeline(){
    return(<>
        
        <div className="timeline">
            <Header/>
            <TweetEditor/>
            <Tweets/>
        </div>
        
        </>
    )
}