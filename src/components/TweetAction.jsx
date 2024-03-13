export default function TweetAction(props){
    return(
        <div className="tweet-action">
            <img src={props.svg}/>
            <span >{props.value}</span>
        </div>
    )
}