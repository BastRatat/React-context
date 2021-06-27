import { createContext } from 'react'

type TUserContext = {
    user: string
    changeUser: (char: string) => void
}

export const UserContext = createContext<Partial<TUserContext>>({})
