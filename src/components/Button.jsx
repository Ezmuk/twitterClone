export default function Button(props) {
  return (
    <button className={`button ${props.post}`} type="submit">
      {props.value}
    </button>
  );
}
