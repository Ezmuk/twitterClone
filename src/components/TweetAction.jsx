import { Link } from "react-router-dom"
import Sms from "../Icons/Sms"

export default function TweetAction(props){
    return(
        
        <Link to={props.path} className="tweet-action" style={{textDecoration:"none", color:"white"}}> 
        
            <img src={props.svg}/>
            <span >{props.value}</span>
        </Link>
    )
}