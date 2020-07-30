const initialState = {
	id: 'c779fe77-a8f5-4958-8a3f-e9465c75be3b',
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
