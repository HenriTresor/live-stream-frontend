import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Main: React.FC = () => {
	return (
		<div className='h-screen w-screen overflow-hidden flex '>
			<Sidebar />
			<div className="w-[78vw] flex flex-col">
				<Navbar />
				<Outlet />
			</div>
		</div>
	)
}

export default Main