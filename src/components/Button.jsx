export default function Button(props){
    return(
        <div ><button className={`button ${props.post}`}>{props.value}</button></div>
    )
}