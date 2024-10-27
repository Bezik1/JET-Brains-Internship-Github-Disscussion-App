import "./index.css"

import { IssueResponse } from "../../../types/Responses"
import ClockIcon from "../../SVG/Clock"
import UserIcon from "../../SVG/User"
import { TextTitle } from "../../UI/TitleText"
import { DescriptionText } from "../../UI/DescriptionText"
import { useModal } from "../../../contexts/ModalContext"
import IssueModal from "../IssueModal"

const Issue = ({ title, created_at, user, i, number } : IssueResponse) =>{
    const { visible,i: modalIndex, openModal } = useModal()

    return (
        <>
            <div className="issue" onClick={e => openModal(e, i)}>
                <img className="issue-img" src={user.avatar_url} />
                <div className="card-info">
                    <TextTitle className="issue-title" title={title} />
                    <div className="descriptions">
                        <DescriptionText
                            icon={<UserIcon className="user-img" />}
                            text={user.login}
                            className="user"
                        />
                        <DescriptionText
                            icon={<ClockIcon className="date-img" />}
                            text={created_at}
                            className="date"
                        />
                    </div>
                </div>
                <div className="gradient" />
            </div>
            {(visible && modalIndex === i) && <IssueModal issueIndex={number} />}
        </>
    )
}

export default Issue