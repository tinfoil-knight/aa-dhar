import logo from '../static/logo.png'
import React from 'react'
import avatar from '../static/avatar.png'

export default function NavBar() {
	const profile = {
		name: 'Munish Vinci',
		avatar: avatar,
	}
	return (
		<div className="nav">
			<div className="bold center">
				<img src={logo} className="logo" height="50" width="50" alt="Logo" />
			</div>
			<div className="profile">
				<span className="bold">{profile.name}</span>
				<span className="center">
					<img
						src={profile.avatar}
						className="avatar"
						height="40"
						width="40"
						alt="Profile"
					/>
				</span>
			</div>
		</div>
	)
}
