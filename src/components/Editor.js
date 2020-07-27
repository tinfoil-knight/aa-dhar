import React from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github'

export default function Editor({ handleChange }) {
	return (
		<>
			<AceEditor
				placeholder="Enter test code here"
				mode="javascript"
				theme="github"
				name="test-code"
				onChange={handleChange}
				fontSize={12}
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
