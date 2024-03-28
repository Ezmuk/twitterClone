import Loop_icn from "../assets/loopTrend.svg";
export default function TrendsInput() {
  return (
    <div className="input_trends justify-around flex items-center w-full h-[42px] bg-[#202327] rounded-[42px]">
      <div>
        <img src={Loop_icn} />
      </div>
      <div className="input_div">
        <input type="text" placeholder="Search Twitter"></input>
      </div>
    </div>
  );
}
