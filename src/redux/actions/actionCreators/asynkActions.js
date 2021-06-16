import axios from 'axios';
import {baseUrl} from '../../../core/baseUrl'

const setLoading = (value) => {
	return {
		type: 'SET_LOADING',
		payload: value
	}
}

const getDataSuccess = (data) => {
	return {
		type: 'GET_DATA_SUCCESS',
		payload: data
	}
}

const getDataFailure = (error) => {
	return {
		type: 'GET_DATA_ERROR',
		payload: error
	}
}

export const fetchingData = () => async dispatch => {
	dispatch(setLoading(true));
	try {
		const response = await axios.get(`${baseUrl}/summary`)
		const {data} = response
		dispatch(getDataSuccess(data))
	}
	catch (error) {
		dispatch(getDataFailure(error))
	}
	finally {
		dispatch(setLoading(false))
	}
}

const setModalLoading = (value) => {
	return {
		type: 'SET_MODAL_LOADING',
		payload: value
	}
}

const getCountryInfo = (countryInfo) => {
	return {
		type: 'GET_COUNTRY_INFO',
		payload: countryInfo
	}
}

const getCountryDataFailure = (error) => {
	return {
		type: 'GET_COUNTRY_DATA_ERROR',
		payload: error
	}
}

export const fetchingSomeCountry = (country) => async dispatch => {
	dispatch(setModalLoading(true));
		try {
		const response = await axios.get(`${baseUrl}/country/${country}`)
		const {data} = response
		dispatch(getCountryInfo(data))
	}
	catch (error) {
		dispatch(getCountryDataFailure(error))
	}
	finally {
		dispatch(setModalLoading(false))
	}
}