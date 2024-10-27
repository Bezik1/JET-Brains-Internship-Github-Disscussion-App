import { createContext, useContext, useState } from "react";
import { ParentProps, Repository } from "../types/Props";
import { RepositoryContextType } from "../types/Contexts";

const RepositoryContext = createContext<RepositoryContextType>({
    repository: {
        name: "",
        owner: "",
    },
    setRepository: undefined
})

export const RepositoryProvider = ({ children } : ParentProps) =>{
    const [repository, setRepository] = useState<Repository>({
        name: "meshrcnn",
        owner: "facebookresearch",
    })

    return (
        <RepositoryContext.Provider value={{repository, setRepository}}>
            { children }
        </RepositoryContext.Provider>
    )
}

export const useRepository = () =>{
    const { repository, setRepository } = useContext(RepositoryContext)

    if(typeof setRepository === 'undefined') throw new Error('Element is outside Repository Provider')

    return { repository, setRepository }
}