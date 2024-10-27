import { useModal } from "../../../contexts/ModalContext"
import { ParentProps } from "../../../types/Props"
import "./index.css"

export const Modal = ({ children, className } : ParentProps & { className?: string }) =>{
    const { x, y, visible } = useModal()

    return visible && (
        <div className={`modal ${className}`} style={{ position: 'absolute', top: y, left: x }}>
            {children}
        </div>
    )
}