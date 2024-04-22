import Sidebar from "./components/Sidebar";
import Trends from "./components/Trends";
import TweetProvider from "./Provider/TweetProvider";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <TweetProvider>
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Trends />
      </div>
    </TweetProvider>
  );
}
