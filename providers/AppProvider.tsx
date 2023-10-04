import React from 'react'
import ModalProvider from './ModalProvider'

type Props = {
    children: React.ReactNode
}

function AppProvider({ children }: Props) {
    return (
        <ModalProvider>
        {children}
        </ModalProvider>
    )
}

export default AppProvider