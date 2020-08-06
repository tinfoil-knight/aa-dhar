const testId = '3e5c2e72-fb22-4491-be66-77b68bb87982'

const initialState = {
	id: localStorage.getItem('fiuId') || testId,
}

const globalReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FIU_ID':
			localStorage.setItem('fiuId', action.id)
			return { ...state, id: action.id }
		case 'RESET':
			localStorage.setItem('fiuId', testId)
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
