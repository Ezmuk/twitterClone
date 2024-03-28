import PageTitle from "./PageTitle";
import timeline_prop from "../assets/Timeline-Prop.svg";
import TopTweets from "./TopTweets";
export default function Header() {
  return (
    <>
      <div className="header px-4 py-6 flex items-center justify-between border-b border-gray-700">
        <PageTitle value="Home" />
        <TopTweets TopIMG={timeline_prop} />
      </div>
    </>
  );
}
