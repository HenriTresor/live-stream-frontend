import ChatAside from '@/components/views/chat/ChatAside'
import ChatBody from '@/components/views/chat/ChatBody'
import React from 'react'

type Props = {}

function page({ }: Props) {
  return (
    <div className='bg-gradient h-[90dvh] gap-5 m-5 rounded-2xl flex justify-start items-start p-4'>
      <ChatAside />
      <ChatBody />
    </div>
  )
}

export default page