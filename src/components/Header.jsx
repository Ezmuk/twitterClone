import PageTitle from "./PageTitle";
import timeline_prop from '../assets/Timeline-Prop.svg'
import TopTweets from "./TopTweets";
export default function Header(){
    return(<>
    <div className="header">
        <PageTitle  value='Home'/>
        <TopTweets  TopIMG={timeline_prop} />
    </div>
        </>
    )
}