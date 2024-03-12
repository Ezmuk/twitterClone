import Button from "./Button";
import SousFollowOwner from "./SousFollowOwner";
import Verified from "../assets/Verified.svg"
export default function SousFollow(props) {
  return (
    <div className="sous-follow">
      <div className="sous-fol">
        <div className="image-sous-fol">
          <img src={props.img} />
        </div>
        <SousFollowOwner img={props.img} value={props.value} icn={Verified}/>
      </div>
      <Button value="follow" post="button-follow"/>
    </div>
  );
}
