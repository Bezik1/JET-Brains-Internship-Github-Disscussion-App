import "./index.css"

import { useFetch } from "../../../hooks/useFetch"
import { Repository } from "../../../types/Props"
import { IssueResponse } from "../../../types/Responses"
import Issue from "../Issue"
import { ModalProvider } from "../../../contexts/ModalContext"
import Title from "../../UI/Title"

const IssuesList = ({ name, owner } : Repository) =>{
    const { data: issues, loading } = useFetch<IssueResponse[]>(`/repos/${owner}/${name}/issues`)
    console.log(issues)
    return (
        <div className="issues-list">
            <Title>{name}</Title>
            {loading
                ? <>Loading...</>
                : <div className="issues-container">
                    <ModalProvider>
                        {issues != null && issues.map((issue, i) => <Issue {...issue} i={i}/>)}
                    </ModalProvider>
            </div>}
        </div>
    )
}

export default IssuesList