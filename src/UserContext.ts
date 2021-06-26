import { createContext } from 'react'

type TUserContext = {
    user: string
    changeUser: () => void
}

export const UserContext = createContext<Partial<TUserContext>>({})
