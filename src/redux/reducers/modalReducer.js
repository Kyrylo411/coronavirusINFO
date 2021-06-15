import { actionTypes } from '../actions/actionTypes'

const {
	OPEN_MODAL,
	CLOSE_MODAL,
	GET_COUNTRY_INFO,
	SET_LOADING,
	GET_COUNTRY_DATA_ERROR
} = actionTypes

const initialState = {
	countryData: [],
	isOpen: false,
	loading: false,
	modalError: null,
}

export const modalReducer = (state=initialState, {type, payload}) => {
	switch (type) {
		case OPEN_MODAL: return {
			...state,
			countryData: payload,
			isOpen: true
		}
		case CLOSE_MODAL: return {
			...state,
			countryData: [],
			isOpen: false
		}
		case GET_COUNTRY_INFO: return {
		...state,
		countryData: payload[payload.length-1]
		}
		case SET_LOADING: return {
		...state,
		loading : payload 
		}
		case GET_COUNTRY_DATA_ERROR: return {
		...state,
		modalError : payload.message 
		}

		default: return state
	}
}