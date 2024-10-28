import { useNavigate } from "react-router-dom"
import "./index.css"
import Title from "../../UI/Title"

export const RepoForm = () =>{
    const navigate = useNavigate()

    const handleSubmit = () =>{
        navigate('/issues')
    }

    return (
        <form className="repository-form" onSubmit={handleSubmit}>
            <Title className="repository-form-title">Repository</Title>
            <div className="repository-inputs">
                <div className="input-container">
                    <input className="input input-owner" />
                </div>
                <div className="input-container">
                    <input className="input input-owner" />
                </div>
            </div>
            <button type="submit" className="submit-btn repo-form-submit" />
        </form>
    )
}

export default RepoForm