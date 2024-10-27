import { Repository } from "./Props"

export type RepositoryContextType = {
    repository: Repository
    setRepository:  React.Dispatch<React.SetStateAction<Repository>> | undefined
}