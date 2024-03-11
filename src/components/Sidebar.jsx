import Button from "./Button"
import TweetAction from "./TweetAction"
import TweetWhite from "../assets/tweetWhite.svg"
import Home_Fill from "../assets/Home-Fill.svg"
import Explore_icn from "../assets/Explore.svg"
import Notificpic from "../assets/Notificpic.svg"
import Message_icn from "../assets/Messages.svg"
import Bookmarks_icn from "../assets/Bookmarks.svg"
import Lists_icn from "../assets/Lists.svg"
import Profile_icn from "../assets/Profile.svg"
import More_icn from "../assets/More.svg"
export default function Sidebar(props){
    return(
        
        <div className="sidebar">
            <TweetAction  img={TweetWhite} />
            <TweetAction  img={Home_Fill} value="Home"/>
            <TweetAction  img={Explore_icn} value="Explore"/>
            <TweetAction  img={Notificpic} value="Notifications"/>
            <TweetAction  img={Message_icn} value="Messages"/>
            <TweetAction  img={Bookmarks_icn} value="Bookmarks"/>
            <TweetAction  img={Lists_icn} value="Lists"/>
            <TweetAction  img={Profile_icn} value="Profile"/>
            <TweetAction  img={More_icn} value="more"/>
            <Button value="Tweet"/>
        </div>
        
    )
}