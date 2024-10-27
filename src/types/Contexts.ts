import { Repository, Modal } from "./Props"

export type RepositoryContextType = {
    repository: Repository
    setRepository:  React.Dispatch<React.SetStateAction<Repository>> | undefined
}

export type ModalContextType = {
    modal: Modal
    setModal:  React.Dispatch<React.SetStateAction<Modal>> | undefined
}