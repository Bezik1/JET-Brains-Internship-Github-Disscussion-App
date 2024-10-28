import { useNavigate } from "react-router-dom"
import "./index.css"
import Title from "../../UI/Title"
import { useRef } from "react"
import { useRepository } from "../../../contexts/RepositoryContext"

export const RepoForm = () =>{
    const repositoryInputRef = useRef<HTMLInputElement>(null!)
    const ownerInputRef = useRef<HTMLInputElement>(null!)
    const { setRepository } = useRepository()
    const navigate = useNavigate()

    const handleSubmit = () =>{
        setRepository({
            name: repositoryInputRef.current.value,
            owner: ownerInputRef.current.value,
        })
        navigate('/issues')
    }

    return (
        <form className="repository-form" onSubmit={handleSubmit}>
            <Title className="repository-form-title">Browser</Title>
            <div className="repository-inputs">
                <div className="input-container">
                    <input ref={repositoryInputRef} placeholder="Repository" className="input input-owner" />
                </div>
                <div className="input-container">
                    <input ref={ownerInputRef} placeholder="Owner" className="input input-owner" />
                </div>
            </div>
            <div className="submit-container">
                <div className="sub-btn" />
                <button type="submit" className="submit-btn repo-form-submit">Submit</button>
            </div>
        </form>
    )
}

export default RepoForm