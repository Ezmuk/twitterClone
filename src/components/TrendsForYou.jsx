import Setting from "../assets/Settings.svg"
import TrendsFuTitle from "./TrendsFuTitle"
import Dot_icn from "../assets/More-2.svg"
import TrendingIn from "./TrendingIn"
import ShowMore from "./ShowMore"

export default function TrendsForYou(props){
    const trendingData = Array.from({length: 4}, (_, i) => i + 1); // Replace this with actual data
    return(
        <div className="trends_f_u">
            <TrendsFuTitle img={Setting} value="Trends For you"/>
            {trendingData.map((item, index) => (
              <TrendingIn key={index} icn={Dot_icn}/>
            ))}
            <ShowMore/>
        </div>
    )
}