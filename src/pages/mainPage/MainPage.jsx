import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Table from '../../components/table/Table'
import Loader from '../../components/loader/Loader'
import { fetchingData } from '../../redux/actions/actionCreators/asynkActions'
import ModalWindow from '../../components/modalWindow/ModalWindow'
import './MainPage.scss'

export default function MainPage() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchingData())
	}, [dispatch])

	const { data, loading, error, filter, countryData, isOpen, modalError, modalLoading } = useSelector(state => {
		const { mainPageReducer: { data, loading, error, filter } } = state
		const { modalReducer: { countryData, isOpen, modalError, modalLoading } } = state
		return {
			data,
			loading,
			error,
			filter,
			countryData,
			isOpen,
			modalError,
			modalLoading
		}
	})


	const backData = {
		Country: 'Sorry, no information',
		Confirmed: 'no information',
		Deaths: 'no information',
		Recovered: 'no information'
	}

	useEffect(() => {
		if (modalError) {
			console.log(modalError)
		}
	}, [modalError])

	if (error) {
		console.log(Error(error))
		return (
			<div className='errorMessage'>
				<h1>Sorry, something went wrong</h1>
			</div>
		)
	}

	return (
		<div>
			{loading ? <Loader /> : <Table data={filter.length ? filter : data} />}
			{modalLoading ? <Loader /> : <ModalWindow isOpen={isOpen} data={countryData || backData} />}
		</div>
	)
}
