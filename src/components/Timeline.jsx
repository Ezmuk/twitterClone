import Header from "./Header";
import TweetEditor from "./TweetEditor";
import Tweets from "./Tweets";
import TweetProvider from "../Provider/TweetProvider";

export default function Timeline() {
  return (
    <>
      <div className="timeline grow-0 shrink-0 basis-[800px] font-inter border border-gray-700 max-w-[720px] ml-[15vw;]">
        <Header />
        <TweetProvider>
          <TweetEditor />
          <Tweets />
        </TweetProvider>
      </div>
    </>
  );
}
