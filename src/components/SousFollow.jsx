import Button from "./Button";
import SousFollowOwner from "./SousFollowOwner";
import Verified from "../assets/Verified.svg";
import { Link } from "react-router-dom";
export default function SousFollow(props) {
  return (
    <div className="sous-follow">
      <Link
        to={props.value.title2}
        className="sous-fol"
        style={{ textDecoration: "none" }}
      >
        <div className="image-sous-fol">
          <img src={props.img} />
        </div>
        <SousFollowOwner img={props.img} value={props.value} icn={Verified} />
      </Link>
      <Button value="follow" post="button-follow" />
    </div>
  );
}
