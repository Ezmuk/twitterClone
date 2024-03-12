import Button from "./Button"
import TweetAction from "./TweetAction"
import sidebarItems from "../Data/dataSide";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      {sidebarItems.map((item, index) => (
        <TweetAction key={index} img={item.img} value={item.value} />
      ))}
    
      <Button value="Tweet" />
    </div>
  );
    }