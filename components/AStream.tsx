import React from 'react'
import play from "../assets/play.svg"
interface Props {
	thumbnail: string;
	name: string;
	views: number;
	id: number;
	creatorPic?: string;
	creatorName?: string;
}

const AStream: React.FC<Props> = ({ thumbnail, name, views, id, creatorName, creatorPic }) => {
	return (
		<div className='p-2'>
			<div className='relative'>
				<img src={thumbnail} alt="" className='w-full rounded-xl' />
				<div className="absolute p-2 rounded-full bg-gradient-to-br from-[#E179CB] to-[#D7DF4D] top-[45%] left-[45%] flex items-center justify-center cursor-pointer">
					<img src={play} alt="" className='w-5 h-5' />
				</div>
			</div>
			<p className='text-lg font-medium my-2'>{name}</p>
			{creatorPic && creatorName && (
				<div className='flex gap-2 items-center'>
					<img src={creatorPic} alt="" className='w-10 h-10 rounded-full' />
					<p className='text-sm font-medium my-2'>{creatorName}</p>
				</div>
			)}
			<div className="flex justify-between items-center">
				<p className='text-[#808080] text-sm font-medium'>{views} views</p>
				<button className='px-4 py-2 rounded-full bg-gradient-to-br from-[#E179CB] to-[#D7DF4D] text-white'>Watch Now</button>
			</div>
		</div>
	)
}

export default AStream