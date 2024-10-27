import "./index.css"

import { IssueResponse } from "../../../types/Responses"
import ClockIcon from "../../SVG/Clock"
import UserIcon from "../../SVG/User"
import { TITLE_MAX_SIZE } from "../../const/text"

const Issue = ({ title, created_at, user } : IssueResponse) =>{
    const titleLengthCondition = title.length > TITLE_MAX_SIZE-1 && "..."

    return (
        <div className="issue">
            <img className="issue-img" src={user.avatar_url} />
            <div className="description">
                <div className="title">
                    {title.substring(0, TITLE_MAX_SIZE)}{titleLengthCondition && "..." }
                </div>
                <div className="user">
                    <UserIcon className="user-img" />
                    <div className="user-login">{user.login}</div>
                </div>
                <div className="date">
                    <ClockIcon className="date-img" />
                    <div className="date-title">{created_at}</div>
                </div>
            </div>
            <div className="animation-pointer" />
        </div>
    )
}

export default Issue