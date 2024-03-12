import Setting from "../assets/Settings.svg"
import TrendsFuTitle from "./TrendsFuTitle"
import Dot_icn from "../assets/More-2.svg"
import TrendingIn from "./TrendingIn"
import ShowMore from "./ShowMore"
export default function TrendsForYou(props){
    return(
        <div className="trends_f_u">
            <TrendsFuTitle img={Setting} value="Trends For you"/>
            <TrendingIn icn={Dot_icn}/>
            <TrendingIn icn={Dot_icn}/>
            <TrendingIn icn={Dot_icn}/>
            <TrendingIn icn={Dot_icn}/>
            <ShowMore/>
        </div>
    )
}