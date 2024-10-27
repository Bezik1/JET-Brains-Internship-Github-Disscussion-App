import { CommentResponse } from "../../../types/Responses"
import ReactMarkdown from 'react-markdown';
import "./index.css"

const mapEmoji = (emoji: string): string =>{
    switch(emoji) {
        case "+1": {
            return "👍"
        }
        case "-1": {
            return "👎"
        }
        case "confused": {
            return "😕"
        }
        case "eyes": {
            return "👀"
        }
        case "heart": {
            return "❤️"
        }
        case "hooray": {
            return "🎉"
        }
        case "laugh": {
            return "😄"
        }
        case "rocket":  {
            return "🚀"
        }
        default:
            console.log(emoji)
            throw new Error('Unknown Emoji')
    }
}

const Comment = (comment : CommentResponse) =>{
    const reactionsArray = Object.entries(comment.reactions).filter(key => key[0] != "total_count" && key[0] != "url")

    return (
        <div className="comment">
            <img className="issue-body-img" src={comment.user.avatar_url} />
            <div className="comment-body">
                <ReactMarkdown>{comment.body}</ReactMarkdown>
                <div className="reactions">
                    {reactionsArray.map(el =>
                    <div className="reaction">
                        <div className="reaction-img">{mapEmoji(el[0])}</div>
                        <div className="reaction-value">{el[1]}</div>
                    </div>)}
            </div>
            </div>
        </div>
    )
}

export default Comment