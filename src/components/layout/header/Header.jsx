import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { searchCountry, resetFilteredData } from '../../../redux/actions/actionCreators/mainPageActions'
import './Header.scss'
import Input from '../../input/Input'

export default function Header() {

	const [inputValue, setInputValue] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		if (inputValue) {
			dispatch(searchCountry(inputValue))

		} else {
			dispatch(resetFilteredData())
		}

	}, [inputValue, dispatch])

	const handleInputChange = ({ target: { value } }) => {
		setInputValue(value)
	}

	return (
		<div className='header'>
			<div className='logoBlock'>
				<div className='logo' />
				<h1 className='headerText'>STATISTIC</h1>
			</div>
			<Input
				placeholder='Search...'
				type='text'
				value={inputValue}
				onChange={handleInputChange}
			/>
		</div>
	)
}
