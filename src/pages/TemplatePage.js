import React from 'react'
import { ToastContainer } from 'react-toastify'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

export default function Page(props) {
	return (
		<div className="App">
			<NavBar />
			<div className="page">
				{props.children}
				<SideBar />
			</div>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				closeOnClick
				pauseOnHover
			/>
		</div>
	)
}
