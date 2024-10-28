import { useAlert } from "../../../contexts/AlertContext"
import "./index.css"

const Alert = () =>{
    const { alert } = useAlert()

    return (
        <div className={`alert-container ${alert !== "" && "activate"}`}>
            <div className="alert-text">{alert}</div>
        </div>
    )
}

export default Alert