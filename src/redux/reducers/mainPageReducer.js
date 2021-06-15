import { actionTypes } from '../actions/actionTypes'

const {
	GET_DATA_SUCCESS,
	SET_LOADING,
	GET_DATA_ERROR,
	SEARCH_COUNTRY,
	RESET_FILTERED_DATA,
} = actionTypes

const initialState = {
	data: [],
	loading: false,
	error: null,
	filter: [],
}

export const mainPageReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case GET_DATA_SUCCESS: return {
			...state,
			data : payload.Countries
		}
		case SET_LOADING: return {
			...state,
			loading : payload 
		}
		case GET_DATA_ERROR: return {
			...state,
			error : payload.message 
		}
		case SEARCH_COUNTRY: return {
			...state,
			filter: state.data.filter(elem => {
				return elem.Country.toLowerCase().includes(payload.toLowerCase())
			})
		}
		case RESET_FILTERED_DATA: return {
			...state,
			filter: []
		}
		default: return state
	}
}