import TweetEditorActions from "./TweetEditorActions";
import Button from "./Button";
import media from "../assets/Media.svg"
import emoji from "../assets/Emoji.svg"
import gif from "../assets/Gif.svg"
import poll from "../assets/Poll.svg"
import schedule from "../assets/Schedule.svg"
export default function TweetEditorButtons(){
    return(
        <div className="tweet-editor-buttons">
        <div className="tweet-editor-actions">
        <TweetEditorActions img={media}/>
        <TweetEditorActions img={gif}/>
        <TweetEditorActions img={poll}/>
        <TweetEditorActions img={emoji}/>
        <TweetEditorActions img={schedule}/>
        </div>
        <Button value="Tweet"/>
        </div>
    )
}