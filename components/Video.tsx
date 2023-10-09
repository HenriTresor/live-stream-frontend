'use client'
import React, { useState } from 'react'

interface Props {
	link: string
}

const Video: React.FC<Props> = ({ link }) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const playVideo = () => {
		setIsPlaying(true);
	};
	return (
		<div className="relative">
			{isPlaying ? (
				<video controls autoPlay>
					<source src={link} type="video/mp4" />
				</video>
			) : (
				<div>
					<div
						className="video-placeholder"
						style={{
							backgroundImage: `url(${link})`,
						}}
					>
						<button className="play-button" onClick={playVideo}>
							<i className="fas fa-play"></i> Play
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Video