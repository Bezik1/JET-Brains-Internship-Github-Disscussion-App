import { useModal } from "../../../contexts/ModalContext";
import { useRepository } from "../../../contexts/RepositoryContext";
import { useFetch } from "../../../hooks/useFetch";
import { CommentResponse } from "../../../types/Responses";
import CloseIcon from "../../SVG/Close";
import { Modal } from "../../UI/Modal"
import Comment from "../Comment";
import "./index.css"

const IssueModal = ({ issueIndex } : { issueIndex: number }) =>{
    const { closeModal } = useModal()
    const { repository } = useRepository()
    const { data: comments } = useFetch<CommentResponse[]>(
        `https://api.github.com/repos/${repository.owner}/${repository.name}/issues/${issueIndex}/comments`
    );

    console.log(comments)

    return (
        <Modal className="issue-modal">
            <nav className="modal-nav">
                <CloseIcon className="close-icon" onClick={closeModal} />
            </nav>
            <div className="comments-container">
                {comments != null && comments.map(comment => <Comment {...comment}/>)}
            </div>
        </Modal>
    )
}

export default IssueModal