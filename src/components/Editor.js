import React from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github'

export default function Editor({ onChange, placeholder, name }) {
	return (
		<>
			<AceEditor
				placeholder={placeholder}
				mode="javascript"
				theme="github"
				name={name}
				onChange={onChange}
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
