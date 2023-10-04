import React from 'react'

type Props = {
    children: React.ReactNode
}

type dialogTypes = {
    title?: string,
    description?: string,
    children?: React.ReactNode
}

type defaultTypes = {
    isOpen: boolean,
    setIsOpen: (vl: boolean) => void,
    dialogContent: dialogTypes | null,
    setDialogContent: (vl: dialogTypes) => void
}

const defaultValues = {
    isOpen: false,
    setIsOpen: () => { },
    dialogContent: null,
    setDialogContent: () => { },
}

export const ModalContext = React.createContext<defaultTypes>(defaultValues)


function ModalProvider({ children }: Props) {

    const [isOpen, setIsOpen] = React.useState(false)
    const [dialogContent, setDialogContent] = React.useState<dialogTypes | null>(null)

    const values: defaultTypes = {
        isOpen, setIsOpen,
        dialogContent, setDialogContent
    }
    return (
        <ModalContext.Provider value={values}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider