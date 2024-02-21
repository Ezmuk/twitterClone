import Header from "./components/Header"
import Post from './components/Post';
import TweetEditor from "./components/TweetEditor";
export default function Home(){
  return (
    <div className="timeline">
      <Header/>
      <TweetEditor/>
      <Post/>
      
    </div>
  )
}