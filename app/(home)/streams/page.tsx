import React from 'react'
import { Helmet } from 'react-helmet'
import AStream from '@/components/AStream'
import TrendingStream from '@/components/TrendingStream'

const page: React.FC = () => {
    const recentStreams = [
        {
            name: "Migos Trio",
            thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            views: 2000,
            id: 1,
            creatorName: "iShowSpeed",
            creatorPic: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            likes: 2
        },
        {
            name: "Migos Trio",
            thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            views: 2000,
            id: 1,
            creatorName: "iShowSpeed",
            creatorPic: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            likes: 2
        },
        {
            name: "Migos Trio",
            thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            views: 2000,
            id: 1,
            creatorName: "iShowSpeed",
            creatorPic: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            likes: 2
        },
        {
            name: "Migos Trio",
            thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            views: 2000,
            id: 1,
            creatorName: "iShowSpeed",
            creatorPic: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            likes: 2
        },
        {
            name: "Migos Trio",
            thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            views: 2000,
            id: 1,
            creatorName: "iShowSpeed",
            creatorPic: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            likes: 2
        },
    ]
    return (
        <div className='p-10 overflow-y-auto'>
         
            <p className='text-lg font-semibold my-3'>🔥Trending on Streams</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 mb-10">
                {recentStreams.map((stream, i) => {
                    return (
                        <TrendingStream key={i} thumbnail={stream.thumbnail} name={stream.name} views={stream.views} id={stream.id} creatorName={stream.creatorName} likes={stream.likes} category={stream.creatorName} live={true} />
                    )
                })}
            </div>
            <p className='text-lg font-semibold my-3'>From people you follow</p>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mb-10">
                {recentStreams.map((stream, i) => {
                    return (
                        <AStream key={i} thumbnail={stream.thumbnail} name={stream.name} views={stream.views} id={stream.id} creatorName={stream.creatorName} creatorPic={stream.creatorPic} />
                    )
                })}
            </div>
        </div>
    )
}

export default page