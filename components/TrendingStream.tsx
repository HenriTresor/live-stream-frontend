import React from 'react'
import play from "../assets/play.svg"
interface Props {
    thumbnail: string;
    name: string;
    views: number;
    id: number;
    creatorName?: string;
    likes: number;
    live: boolean
    category: string;
}

const TrendingStream: React.FC<Props> = ({ thumbnail, name, views, id, creatorName, likes, live, category }) => {
    return (
        <div className=' bg-[rgba(71,112,255,0.08)] rounded-xl'>
            <div className='relative'>
                <img src={thumbnail} alt="" className='w-full rounded-xl h-[200px]' />
                <div className="absolute p-2 rounded-full bg-gradient-to-br from-[#E179CB] to-[#D7DF4D] top-[45%] left-[45%] flex items-center justify-center cursor-pointer">
                    <img src={play} alt="" className='w-5 h-5' />
                </div>
                {live && <div className='absolute px-2 py-0.5 rounded-full bg-gradient-to-br from-[#E179CB] to-[#D7DF4D] top-2 right-2'>Live</div>}
            </div>
            <div className="p-2">
                <p className='text-lg font-medium my-2'>{name}</p>
                <p className='text-sm font-medium my-2 text-gray-800'>{creatorName}</p>
                <p className='text-base font-medium my-2'>{category}</p>
                <div className="flex justify-between items-center">
                    <p className='text-[#808080] text-sm font-medium'>{views} Viewers</p>
                    <button className='px-4 py-2 rounded-full border-[#FF4D00] border-2 '>
                        🔥{likes}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TrendingStream