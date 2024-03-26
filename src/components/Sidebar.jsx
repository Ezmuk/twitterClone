import Button from "./Button"
import sidebarItems from "../Data/dataSide";
import Actions from "./Actions";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      {sidebarItems.map((item, index) => (
        <Actions key={index} svg={item.img} value={item.value} path={item.path}/>
      ))}
    
      <Button value="Tweet" />
    </div>
  );
    }