import "./index.css"

import { useFetch } from "../../../hooks/useFetch"
import { Repository } from "../../../types/Props"
import { IssueResponse } from "../../../types/Responses"
import Issue from "../Issue"

const IssuesList = ({ name, owner } : Repository) =>{
    const { data: issues, loading } = useFetch<IssueResponse[]>(`/repos/${owner}/${name}/issues`)

    console.log(issues)

    return (
        <div className="issues-list">
            <div className="issues-title-container">
                <h1 className="issues-title">{name}</h1>
            </div>
            {loading
                ? <>Loading...</>
                : <div className="issues-container">
                    {issues != null && issues.map(issue => <Issue {...issue} />)}
            </div>}
        </div>
    )
}

export default IssuesList