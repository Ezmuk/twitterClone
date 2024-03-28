import { Link } from "react-router-dom";

export default function Avatar(props) {
  return (
    <Link to="/brandley_" className="avatar grow-0 shrink-0 basis-[70px]">
      <img className="w-full rounded-full" src={props.img} />
    </Link>
  );
}
