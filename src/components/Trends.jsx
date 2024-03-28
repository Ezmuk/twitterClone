import TrendsForYou from "./TrendsForYou";
import WhotoFollow from "./WhoToFollow";
import TrendsInput from "./TrendsInput";
export default function Trends() {
  return (
    <div className="trends flex flex-col w-full ">
      <TrendsInput />
      <TrendsForYou />
      <WhotoFollow />
    </div>
  );
}
