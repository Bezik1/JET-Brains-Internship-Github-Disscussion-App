import { CommentResponse } from "../../../types/Responses";
import ReactMarkdown from 'react-markdown';
import "./index.css";
import { mapEmoji } from "../../../utils/mapEmoji";
import { truncateText } from "../../../utils/truncateText";
import { DescriptionText } from "../../UI/DescriptionText";
import ClockIcon from "../../SVG/Clock";

const Comment = (comment : CommentResponse) => {
    const reactionsArray = Object.entries(comment.reactions).filter(
        ([key]) => key !== "total_count" && key !== "url"
    );

    return (
        <div className="comment">
            <img className="issue-body-img" src={comment.user.avatar_url} alt="User Avatar" />
            <div className="comment-body">
                <ReactMarkdown
                    components={{
                        p: ({ children }) => <p>{truncateText(children as string)}</p>,
                    }}
                >
                    {comment.body}
                </ReactMarkdown>
                <footer className="comment-footer">
                    <div className="reactions">
                        {reactionsArray.map(([reaction, count], index) => (
                            <div className="reaction" key={index}>
                                <div className="reaction-img">{mapEmoji(reaction)}</div>
                                <div className="reaction-value">{count}</div>
                            </div>
                        ))}
                    </div>
                    <DescriptionText className="comment-description" icon={<ClockIcon />} text={comment.created_at} />
                </footer>
            </div>
        </div>
    );
};

export default Comment