import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { dialogTypes } from '@/providers/ModalProvider'

type Props = {
    isOpen: boolean,
    dialogContent: dialogTypes | null,
    setIsOpen: (vl: boolean) => void,
    nextAction?: (evt: any) => void
}

function MyDialog({ isOpen, dialogContent, setIsOpen, nextAction }: Props) {

    return (
        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            as={Fragment}
        >
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <Dialog.Panel>
                    <Dialog.Title>{dialogContent?.title}</Dialog.Title>
                    <Dialog.Description>
                        {dialogContent?.description}
                    </Dialog.Description>

                    {dialogContent?.children}

                    <button onClick={nextAction}>Continue</button>
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                </Dialog.Panel>
            </Dialog>
        </Transition>
    )
}

export default MyDialog