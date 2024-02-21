import photo from './assets/php.jpg';
import emoji from './assets/Emoji.svg';
import gif from './assets/Gif.svg'
import media from './assets/Media.svg'
import poll from './assets/Poll.svg'
import schedule from './assets/Schedule.svg'
import timeline_prop from './assets/Timeline-Prop.svg'
import Button from "./Button"

function Header () {
    return (
        <>
        <header className='header'>
            <h2 className='page-title'>Home</h2>
            <img src={timeline_prop} alt='timeline prop'/>
        </header>
        <div className='tweet-editor'>
            <div className='avatar'>
                <img src={photo} alt="Profile Picture" />
            </div>
            <div className='tweet-editor-form'>
                <input className='tweet-editor-input' type='text' placeholder="What's happening?" />
                <div  className='tweet-editor-buttons'>
                    <div className='tweet-editor-actions'>
                        <img src={media} alt='media'/>
                        <img src={gif} alt='gif'/>
                        <img src={poll} alt='poll'/>
                        <img src={emoji} alt='emoji'/>
                        <img src={schedule} alt='schedule'/>
                    </div>
                <Button titre={'Tweet'}></Button>
                </div>
            
            </div>
        </div>
        </>
    )}
export default Header;