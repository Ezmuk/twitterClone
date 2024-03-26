import { Link } from "react-router-dom";

export default function TweetAvatar(props){
    return(
        <Link to={props.user} className="avatar"><img src={props.img}/></Link>
    )
}