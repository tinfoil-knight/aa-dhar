import React, { useState } from 'react'
import { Route, Switch, Link, useLocation } from 'react-router-dom'
import './App.css'
import logo from './static/logo.png'
import avatar from './static/avatar.png'

const Package = ({ id, title, details, time, version }) => {
	return (
		<div className="pkg">
			<div className="spaced">
				<span className="bold">{title}</span>
				<span className="thin">#{id}</span>
			</div>
			<div className="buttonght">{details}</div>
			<div className="thin dim spaced">
				<span>every {time} weeks per user</span>
				<span>v{version}</span>
			</div>
			<button className="pkg-test">Test</button>
		</div>
	)
}

const CreateNew = () => {
	return (
		<div className="new-box">
			<button className="new-btn">+</button>
			<span className="bold">Create New</span>
		</div>
	)
}

const NavBar = ({ profile }) => {
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
						alt="Avatar"
					/>
				</span>
			</div>
		</div>
	)
}

const Option = ({ option, setSelected }) => {
	return (
		<button
			className="option"
			key={option}
			onClick={e => setSelected(e.currentTarget.innerText)}
		>
			<Link to={'/' + option.toLowerCase()}>{option}</Link>
		</button>
	)
}

const SideBar = () => {
	const optionsTop = ['Packages', 'Analytics', 'Billing', 'Test', 'Settings']
	const optionsBottom = ['Support', 'Documentation']
	const [selected, setSelected] = useState('Packages')
	return (
		<div className="sidebar">
			<div className="options">
				{optionsTop.map(option => (
					<Option option={option} onSelect={setSelected} key={option} />
				))}
			</div>
			<div className="options">
				{optionsBottom.map(option => (
					<Option option={option} onSelect={setSelected} key={option} />
				))}
			</div>
		</div>
	)
}

const PackagePage = () => {
	const data = [
		{
			id: 132,
			title: 'Analyze Risk Profile',
			details: "Compute the risk profile of user's Mutual Fund investments.",
			time: 3,
			version: '1.0.52',
		},
		{
			id: 133,
			title: 'Analyze Risk Profile',
			details: "Compute the risk profile of user's Mutual Fund investments.",
			time: 3,
			version: '1.0.52',
		},
	]
	return (
		<div className="page">
			<div className="pkg-box">
				<h1>My Packages</h1>
				{data.map(el => (
					<Package
						id={el.id}
						title={el.title}
						details={el.details}
						time={el.time}
						version={el.version}
						key={el.id}
					/>
				))}
				<CreateNew />
			</div>
			<SideBar />
		</div>
	)
}
const App = () => {
	const profile = {
		name: 'Munish Vinci',
		avatar: avatar,
	}
	return (
		<div className="App">
			<NavBar profile={profile} />
			<Switch>
				<Route exact path="/" component={PackagePage} />
				<Route path="/packages" component={PackagePage} />
				<Route path="/analytics" component={PackagePage} />
			</Switch>
		</div>
	)
}

export default App
