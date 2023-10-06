import { Input } from '@/components/ui/input'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Message from './Message'
type Props = {}

const messages = [
    { sender: 'Jena ortega', createdAt: new Date(Date.now()), latestMsg: 'Hi', seen: true },
    { sender: 'Jena Og', createdAt: new Date(Date.now()), latestMsg: 'hello', seen: false },
]

function ChatAside({ }: Props) {
    return (
        <div className=' w-[30%] bg-white h-full rounded-2xl p-3 overflow-auto'>
            <div className='p-2 w-full grid place-content-center gap-4 border-b-2'>
                <h1 className='text-[#E179CB]'>Friends</h1>
            </div>
            <div className='w-full p-1 mt-4 mb-4  border-2 bg-gray-300 flex items-center rounded-full pr-5'>
                <Input className='outline-none border-none bg-gray-300 focus-within:outline-none focus:outline-none focus-visible:outline-none ' placeholder='search...' />
                <FaSearch />
            </div>

            <div className='w-full h-full'>
                {
                    messages.map(message => (
                        <Message {...message} key={message.latestMsg} />
                    ))
                }
            </div>
        </div>
    )
}

export default ChatAside