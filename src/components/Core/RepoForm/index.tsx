import { useNavigate } from "react-router-dom"
import "./index.css"
import Title from "../../UI/Title"
import { useRef } from "react"
import { useRepository } from "../../../contexts/RepositoryContext"
import Input from "../../UI/Input"
import Submit from "../../UI/Submit"

export const RepoForm = () =>{
    const repositoryInputRef = useRef<HTMLInputElement>(null!)
    const ownerInputRef = useRef<HTMLInputElement>(null!)
    const { repository, setRepository } = useRepository()
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
                <Input
                    className="input-owner"
                    ref={repositoryInputRef}
                    defaultValue={repository.name}
                    placeholder="Repository"
                />
                <Input
                    className="input-owner"
                    ref={ownerInputRef}
                    defaultValue={repository.owner}
                    placeholder="Repository"
                />
            </div>
            <Submit
                label="Submit"
                onClick={handleSubmit}
                className="repo-form-submit"
            />
        </form>
    )
}

export default RepoForm