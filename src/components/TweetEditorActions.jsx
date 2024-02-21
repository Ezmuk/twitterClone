
import emoji from '../assets/Emoji.svg';
import gif from '../assets/Gif.svg'
import media from '../assets/Media.svg'
import poll from '../assets/Poll.svg'
import schedule from '../assets/Schedule.svg'

export default function TweetEditorActions(){
    return(
        <div className='tweet-editor-actions'>
            <img src={media} alt='media'/>
            <img src={gif} alt='gif'/>
            <img src={poll} alt='poll'/>
            <img src={emoji} alt='emoji'/>
            <img src={schedule} alt='schedule'/>
        </div>
    )
}