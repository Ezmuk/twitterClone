import Loop_icn from "../assets/loopTrend.svg";
import TrendsForYou from "./TrendsForYou";
import WhotoFollow from "./WhoToFollow";
export default function Trends() {
  return (
    <div className="trends">
      <div className="input_trends">
        <div>
          <img src={Loop_icn} />
        </div>
        <div>
          <input type="text" placeholder="Search Twitter"></input>
        </div>
      </div>
        <TrendsForYou/>
        <WhotoFollow/>
    </div>
  );
}
