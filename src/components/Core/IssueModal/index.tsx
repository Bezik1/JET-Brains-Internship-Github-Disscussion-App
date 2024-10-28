import { useModal } from "../../../contexts/ModalContext";
import { useRepository } from "../../../contexts/RepositoryContext";
import { useFetch } from "../../../hooks/useFetch";
import { CommentResponse, Reactions } from "../../../types/Responses";
import CloseIcon from "../../SVG/Close";
import { Modal } from "../../UI/Modal"
import Comment from "../Comment";
import "./index.css"

const IssueModal = ({ id, issueIndex , issueBody, user, created_at, reactions} :
    { reactions: Reactions, issueIndex: number, issueBody: string, user: { id: number, login: string, avatar_url: string; html_url: string }, created_at: string, id: number}) =>{
    const { closeModal } = useModal()
    const { repository } = useRepository()
    const { data: comments } = useFetch<CommentResponse[]>(
        `https://api.github.com/repos/${repository.owner}/${repository.name}/issues/${issueIndex}/comments`
    );

    return (
        <Modal className="issue-modal">
            <nav className="modal-nav">
                <CloseIcon className="close-icon" onClick={closeModal} />
            </nav>
            <div className="issue-body">
                <div className="issue-body-text">
                    <Comment id={id} reactions={reactions} created_at={created_at} body={issueBody} user={user}/>
                    <div className="comments-container">
                        {comments != null && comments.map(comment => <Comment {...comment}/>)}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default IssueModal