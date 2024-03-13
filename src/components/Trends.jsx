
import TrendsForYou from "./TrendsForYou";
import WhotoFollow from "./WhoToFollow";
import TrendsInput from "./TrendsInput";
export default function Trends() {
  return (
    <div className="trends">
        <TrendsInput/>
        <TrendsForYou/>
        <WhotoFollow/>
    </div>
  );
}
