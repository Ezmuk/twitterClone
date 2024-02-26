import Header from "./Header";
import TweetEditor from "./TweetEditor";
import Tweets from "./Tweets";

export default function Timeline(){
    return(<>
        <div></div>
        <div className="timeline">
            <Header/>
            <TweetEditor/>
            <Tweets/>
        </div>
        <div></div>
        </>
    )
}