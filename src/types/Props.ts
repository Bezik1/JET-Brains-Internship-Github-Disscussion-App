import { ReactNode } from "react"

export type Repository = {
    owner: string
    name: string
}

export type ParentProps = {
    children: ReactNode
}