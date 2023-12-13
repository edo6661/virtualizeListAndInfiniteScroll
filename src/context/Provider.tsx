import { ReactNode, createContext, useEffect, useState } from "react";

interface Props {
    children: ReactNode
}

export const Context = createContext({} as ContextType);

export const ContextProvider = ({ children }: Props) => {

    const [wishlist, setWishlist] = useState<string[]>([])

    const key = 'wishlist'

    useEffect(() => {
        setWishlist(JSON.parse(window.localStorage.getItem(key) ?? '[]'))
    }, [])
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(wishlist))
    }, [wishlist])

    const addWishlist = (id: string) => !wishlist.includes(id) && setWishlist(prev => [...prev, id])

    const deleteWishlist = (id: string) => wishlist.includes(id) && setWishlist(prev => prev.filter(i => i !== id))



    return (
        <Context.Provider value={{
            wishlist,
            setWishlist,
            addWishlist,
            deleteWishlist
        }}>
            {children}
        </Context.Provider>
    )
}
