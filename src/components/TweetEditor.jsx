import avatar from '../assets/Profile-Photo.png'
import Avatar from './Avatar'
import TweetEditorForm from './TweetEditorForm'
export default function TweetEditor() {
    return (
        <div className='tweet-editor'>
        <Avatar img={avatar} />
        <TweetEditorForm/>
        </div>
        )
}