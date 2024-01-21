import React, { createContext, useContext, useState } from 'react'

const BgContext = createContext();

export const NavProvider = ({children}) => {
    const [open, setOpen] = useState(false)
    const [record, setRecord] = useState(false)

    const value = { open, setOpen, record, setRecord }

    return (
        <BgContext.Provider value={value}>
            {children}
        </BgContext.Provider>
    )
}

export const useBgContext = () => {
    return useContext(BgContext)
}
