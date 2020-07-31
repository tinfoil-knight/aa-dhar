const initialState = {
	id: '3e5c2e72-fb22-4491-be66-77b68bb87982',
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
