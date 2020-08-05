import React from 'react'
import TemplatePage from './TemplatePage'

export default function DocsPage() {
	return (
		<TemplatePage>
			<div className="pkg-box spaced-t">
				<h1>Documentation</h1>
				<div className="w-box scrollable">
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
					<div>
						<section>
							<div>
								<h2>Command Line Usage</h2>
								<p>
									You can create new functions and update them as well directly from terminal. This
									gives developers access to faster deployment and custom tools.
								</p>
							</div>
							<div>
								<h3>Install Darth VDR CLI</h3>
								<p>
									On Ubuntu/Debian based system, you can install Darth VDR CLI simply via apt. For
									other systems:
									<pre>
										<code>$ pip install darth-vdr</code>
									</pre>
								</p>
							</div>
							<div>
								<h3>Login</h3>
								<p>
									Login securely to your Darth Account.
									<pre>
										<code>$ darth-vdr login</code>
									</pre>
								</p>
							</div>
							<div>
								<h3>Deploy</h3>
								<p>
									Deploy a new version to your created function. It takes meta input from
									darth-vdr.json
									<pre>
										<code>$ darth-vdr deploy</code>
									</pre>
								</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		</TemplatePage>
	)
}
