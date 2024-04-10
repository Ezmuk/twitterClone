export default function SousFollowOwner(props) {
  return (
    <div className="sous-follow-owner">
      <div className="sous-follow-owner-title1">{props.value["title1"]}</div>
      <div>
        <img src={props.icn} />
      </div>
      <div className="sous-follow-owner-title2">{props.value["title2"]}</div>
    </div>
  );
}
