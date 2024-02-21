import love from "../assets/love.svg"
import sms from "../assets/sms.svg"
import repub from "../assets/repub.svg"
import share from "../assets/Share.svg"

export default function TweetAction(){
    return(
        <div className="tweet-actions">
            <div className="tweet-action">
                <img src={sms}/>
                <p>150</p>
            </div>

            <div className="tweet-action">
                <img src={repub}/>
                <p>120</p>
            </div>

            <div className="tweet-action">
                <img src={love}/>
                <p>130</p>
            </div>

            <div className="tweet-action">
                <img src={share}/>
                <p>110</p>
            </div>
        </div>
    )
}