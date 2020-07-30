import React from 'react'
import TemplatePage from './TemplatePage'

export default function DocsPage() {
	return (
		<TemplatePage>
			<div className="pkg-box">
				<h1>Documentation</h1>
				<div className="w-box center">
					<span>Please visit &nbsp;</span>
					<a href="https://pvukl.csb.app/">
						<button className="btn">https://pvukl.csb.app/</button>
					</a>
					<span> &nbsp;for relevant documentation.</span>
				</div>
			</div>
		</TemplatePage>
	)
}
