
export const getCountryInfo = (dataInfo) => {
	return {
		type: 'GET_COUNTRY_INFO',
		payload: dataInfo
	}
}
export const searchCountry = (data) => {
	return {
		type: 'SEARCH_COUNTRY',
		payload: data
	}
}
export const resetFilteredData = () => {
	return {
		type: 'RESET_FILTERED_DATA'
	}
}

