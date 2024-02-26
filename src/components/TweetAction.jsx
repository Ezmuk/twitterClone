export default function TweetAction(props){
    return(
        <div className="tweet-action">
            <img src={props.img}/>
            <span >{props.value}</span>
        </div>
    )
}