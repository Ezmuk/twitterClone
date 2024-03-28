import avatar from "../assets/Profile-Photo.png";
import Avatar from "./Avatar";
import TweetEditorForm from "./TweetEditorForm";
export default function TweetEditor() {
  return (
    <div
      className="tweet-editor flex items-start justify-start gap-[20px] px-[1rem] py-[0.3rem] border-b border-solid border-gray-700 
    "
    >
      <Avatar img={avatar} />
      <TweetEditorForm />
    </div>
  );
}
