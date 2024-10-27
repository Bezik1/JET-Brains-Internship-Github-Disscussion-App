import { CommentResponse } from "../../../types/Responses"
import "./index.css"

const Comment = (comment : CommentResponse) =>{
    console.log(comment)

    return (
        <div className="comment">
            <div className="comment-body">{comment.body}</div>
        </div>
    )
}

export default Comment