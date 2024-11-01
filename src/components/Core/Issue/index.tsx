import "./index.css"

import { IssueResponse } from "../../../types/Responses"
import ClockIcon from "../../SVG/Clock"
import UserIcon from "../../SVG/User"
import { TextTitle } from "../../UI/TitleText"
import { DescriptionText } from "../../UI/DescriptionText"
import { useModal } from "../../../contexts/ModalContext"
import IssueModal from "../IssueModal"
import { formatDate } from "../../../utils/formatDate"
import KeyIcon from "../../SVG/Key"

const Issue = ({ id, reactions, title, body, created_at, user, i, number, state } : IssueResponse) =>{
    const { visible,i: modalIndex, openModal } = useModal()

    return (
        <>
            <div className="issue" onClick={() => openModal(i)}>
                <img className="issue-img" src={user.avatar_url} />
                <div className="card-info">
                    <TextTitle className="issue-title" title={title} />
                    <div className="descriptions">
                        <DescriptionText
                            icon={<KeyIcon className="key-icon" />}
                            text={state}
                            className="user"
                        />
                        <DescriptionText
                            icon={<UserIcon className="user-img" />}
                            text={user.login}
                            className="user"
                        />
                        <DescriptionText
                            icon={<ClockIcon className="date-img" />}
                            text={formatDate(created_at)}
                            className="date"
                        />
                    </div>
                </div>
                <div className="gradient" />
            </div>
            {(visible && modalIndex === i) && <IssueModal
                                                issueBody={body}
                                                user={user}
                                                created_at={created_at}
                                                id={id}
                                                reactions={reactions}
                                                issueIndex={number}
                                            />}
        </>
    )
}

export default Issue