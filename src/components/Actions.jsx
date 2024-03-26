import { Link } from "react-router-dom"
import Sms from "../Icons/Sms"

export default function Actions(props){
    return(
        
        <Link to={props.path} className="tweet-action" style={{textDecoration:"none", color:"white"}}> 
        
            {props.svg}
            <span >{props.value}</span>
        </Link>
    )
}