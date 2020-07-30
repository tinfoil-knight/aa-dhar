const initialState = {
	id: 'c0a83801-738c-1c50-8173-8cfc75dc0000',
}

const globalReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FIU_ID':
			return { ...state, id: action.id }
		case 'RESET':
			return { ...initialState }
		default:
			return state
	}
}

export const changeId = id => {
	return {
		type: 'FIU_ID',
		id: id,
	}
}

export const resetAll = () => {
	return {
		type: 'RESET',
	}
}

export default globalReducer
