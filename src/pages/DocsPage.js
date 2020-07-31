import React from 'react'
import TemplatePage from './TemplatePage'

export default function DocsPage() {
	return (
		<TemplatePage>
			<div className="pkg-box spaced-t">
				<h1>Documentation</h1>
				<div className="w-box">
					<div>
						<span>The documentation for this app is available at:</span>
						<a className="link" href="https://pvukl.csb.app/">
							https://pvukl.csb.app/
						</a>
					</div>
					<div>
						<span>
							For any issues faced while using the app, contact a team member of this group:
						</span>
						<a className="link" href="https://github.com/aa-dhaar">
							AA-Dhaar
						</a>
					</div>
				</div>
			</div>
		</TemplatePage>
	)
}
