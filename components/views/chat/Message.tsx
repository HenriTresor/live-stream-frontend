import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import dayjs from 'dayjs'
import React from 'react'
import relativePlugin from 'dayjs/plugin/relativeTime'

dayjs.extend(relativePlugin)

type Props = {
    sender: string,
    createdAt: Date,
    latestMsg: string,
    seen: boolean
}

function Message({ sender, createdAt, latestMsg, seen }: Props) {
    return (
        <div className='flex items-center justify-between p-2 mb-3 border-b text-[.9em] cursor-pointer'>
            <div className='flex items-center gap-2'>
                <Avatar>
                    <AvatarImage />
                    <AvatarFallback>FN</AvatarFallback>
                </Avatar>

                <div className='flex flex-col'>
                    <h1 className='font-bold '>{sender}</h1>
                    <p className='text-[#686868]'>{latestMsg}</p>
                </div>
            </div>
            <div className='flex flex-col justify-end items-end'>
                <p className='text-[#777777] font-bold'>{dayjs(createdAt).fromNow(true)}</p>
                <p className='text-[#777777] font-mono'>{seen ? 'sent, received' : 'sent'}</p>
            </div>
        </div>
    )
}

export default Message