const globalReducer = (state, action) => {
	switch (action.type) {
		case 'FIU_ID':
			return { ...state, id: action.data }
		default:
			return state
	}
}

export default globalReducer
