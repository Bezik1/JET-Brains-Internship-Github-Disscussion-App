import { createContext, useContext, useState } from "react";
import { ParentProps, Modal } from "../types/Props";
import { ModalContextType } from "../types/Contexts";

const ModalContext = createContext<ModalContextType>({
    modal: {
        i: 0,
        visible: false,
    },
    setModal: undefined,
})

export const ModalProvider = ({ children } : ParentProps) =>{
    const [modal, setModal] = useState<Modal>({
        i: 0,
        visible: false,
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
        setModal({
            i,
            visible: true,
        })
    }

    const closeModal = () => {
        setModal({ visible: false, i: 0 })
    }

    return { ...modal, setModal, openModal, closeModal }
}