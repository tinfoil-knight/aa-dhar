import React from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github'

export default function Editor() {
	return (
		<>
			<AceEditor
				placeholder="Enter test code here"
				mode="javascript"
				theme="github"
				name="test-code"
				// onLoad={this.onLoad}
				// onChange={this.onChange}
				fontSize={14}
				showPrintMargin={true}
				showGutter={true}
				highlightActiveLine={true}
				value={``}
				setOptions={{
					showLineNumbers: true,
					tabSize: 2,
				}}
				editorProps={{
					$blockScrolling: Infinity,
				}}
				className="editor"
			/>
		</>
	)
}
