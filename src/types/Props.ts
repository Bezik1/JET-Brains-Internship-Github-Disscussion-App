import { ReactNode } from "react"

export type Repository = {
    owner: string
    name: string
}

export type Modal = {
    i: number
    visible: boolean
}

export type ParentProps = {
    children: ReactNode
}