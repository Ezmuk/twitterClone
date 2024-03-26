import { Link } from "react-router-dom";

export default function Avatar(props){
    return (
        <Link to="/brandley_" className="avatar"><img src={props.img}/></Link>
    )
}