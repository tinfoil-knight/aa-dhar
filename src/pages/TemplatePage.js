import React from 'react'
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
		</div>
	)
}
