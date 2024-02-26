import Tweet from "./Tweet";
import avat from "../assets/avat.svg";
import Cnn from "../assets/cnn.svg";
import Img from "../assets/Img.svg";
import Tweetlogo from "../assets/tweetlogo.svg";
export default function Tweets(){
    let tweets = [{
        "id": "01",
        "tweet-avatar" : Cnn, 
        "tweet-content":{
            "tweet-body":{
                "tweet-title": {
                    "tweet-title-author":"CNN2",
                    "tweet-author": "CNN",
                     "tweet-time": "7m",
                },
                "tweet-text": "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
                
            },
            "tweet-actions":{
                "reply":"57",
                "retweet":"144",
                "react":"184",
            }
        }
    },
    {
        "id": "02",
        "tweet-avatar" : avat, 
        "tweet-content":{
            "tweet-body":{
                "tweet-title": {
                    "tweet-title-author":"The New York Times",
                    "tweet-author": "@nytimes",
                     "tweet-time": "2h",
                },
                "tweet-text": "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
                "tweet-image": Img
            },
            "tweet-actions":{
                "reply":"19",
                "retweet":"48",
                "react":"482",
                "share":""
            }
        }
    },{
        "id": "03",
        "tweet-avatar" : Tweetlogo, 
        "tweet-content":{
            "tweet-body":{
                "tweet-title": {
                    "tweet-title-author":"Twitter",
                    "tweet-author": "@Twitter",
                     "tweet-time": "Oct 29 ",
                },
                "tweet-text": "BIG NEWS lol jk still Twitter",
                
            },
            "tweet-actions":{
                "reply":"6.8K",
                "retweet":"36.6K",
                "react":"267.1K",
                "share":""
            }
        }
    },
    {
        "id": "04",
        "tweet-avatar" : Tweetlogo, 
        "tweet-content":{
            "tweet-body":{
                "tweet-title": {
                    "tweet-title-author":"Twitter",
                    "tweet-author": "@Twitter",
                     "tweet-time": "Oct 4 ",
                },
                "tweet-text": "hello literally everyone",
                
                
            },
            "tweet-actions":{
                "reply":"118.7K",
                "retweet":"785.4K",
                "react":"3.3M",
                "share":""
            }
        }
    },
    {
        "id": "05",
        "tweet-avatar" : Tweetlogo, 
        "tweet-content":{
            "tweet-body":{
                "tweet-title": {
                    "tweet-title-author":"Twitter",
                    "tweet-author": "@Twitter",
                     "tweet-time": "Oct 4 ",
                },
                "tweet-text": "hello literally everyone",
                "tweet-image": Img
                
            },
            "tweet-actions":{
                "reply":"118.7K",
                "retweet":"785.4K",
                "react":"3.3M",
                "share":""
            }
        }
    }]
    
    return(
        <div className="tweets">
            {tweets.map((item)=>
            <Tweet key={item.id} value={item} />)}
            
        </div>
    )
}