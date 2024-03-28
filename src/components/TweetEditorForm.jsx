import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditorButtons";
export default function TweetEditorForm() {
  return (
    <div className="tweet-editor-form flex-auto">
      <TweetEditorInput />
      <TweetEditorButtons />
    </div>
  );
}
