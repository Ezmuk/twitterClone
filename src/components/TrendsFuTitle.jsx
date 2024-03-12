export default function TrendsFuTitle(props) {
  return (
    <div className="trendsFuTitle">
      <div>{props.value}</div>
      <div>
        <img src={props.img} />
      </div>
    </div>
  );
}
