import { createContext, useContext, useState } from "react";
import { ParentProps, Modal } from "../types/Props";
import { ModalContextType } from "../types/Contexts";

const ModalContext = createContext<ModalContextType>({
    modal: {
        i: 0,
        visible: false,
        x: 0,
        y: 0,
    },
    setModal: undefined,
})

export const ModalProvider = ({ children } : ParentProps) =>{
    const [modal, setModal] = useState<Modal>({
        i: 0,
        visible: false,
        x: 0,
        y: 0,
    })

    return (
        <ModalContext.Provider value={{modal, setModal}}>
            { children }
        </ModalContext.Provider>
    )
}

export const useModal = () =>{
    const { modal, setModal } = useContext(ModalContext)

    if(typeof setModal === 'undefined') throw new Error('Element is outside Modal Provider')

    const openModal = (event: React.MouseEvent, i: number) => {
        const { clientX, clientY } = event
        setModal({
            i,
            visible: true,
            x: clientX > 0.65 * window.innerWidth ? 0.7*clientX-Math.abs(window.innerWidth-clientX) : clientX,
            y: 0.1*clientY,
        })
    }

    const closeModal = () => {
        setModal({ visible: false, i: 0, x: 0, y: 0 })
    }

    return { ...modal, setModal, openModal, closeModal }
}