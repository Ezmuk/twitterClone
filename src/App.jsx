
import Sidebar from "./components/Sidebar";
import Trends from "./components/Trends";
import {
  Outlet,
} from "react-router-dom";
export default function App() {
  return (
    <>
    <div>
    <Sidebar />
    </div>
      <div>
        <Outlet />
      </div>
      <div>
      <Trends />
      </div>
      
    </>
  );
}
