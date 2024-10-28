import { Repository, Modal } from "./Props"

export type AlertContextType = {
    alert: string
    setAlert:  React.Dispatch<React.SetStateAction<string>> | undefined
}

export type RepositoryContextType = {
    repository: Repository
    setRepository:  React.Dispatch<React.SetStateAction<Repository>> | undefined
}

export type ModalContextType = {
    modal: Modal
    setModal:  React.Dispatch<React.SetStateAction<Modal>> | undefined
}