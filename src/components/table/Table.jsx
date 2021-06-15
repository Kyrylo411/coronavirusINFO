import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { openModal } from '../../redux/actions/actionCreators/modalActions'
import { fetchingSomeCountry } from '../../redux/actions/actionCreators/asynkActions'
import './Table.scss'

export default function Table({ data }) {

	const [sortCountry, setSortCountry] = useState(false)
	const [sortTotal, setSortTotal] = useState(false)

	const dispatch = useDispatch()

	const getCountryInfo = async ({ target: { textContent } }) => {
		dispatch(fetchingSomeCountry(textContent))
		dispatch(openModal())
	}

	const handleCountrySort = () => {
		if (!sortCountry) {
			data.sort((a, b) => {
				return a.Country > b.Country ? -1 : 1
			})
			setSortCountry(true)
		}
		else {
			data.sort((a, b) => {
				return a.Country > b.Country ? 1 : -1
			})
			setSortCountry(false)
		}
	}

	const handleTotalSort = () => {
		if (!sortTotal) {
			data.sort((a, b) => {
				return a.TotalConfirmed - b.TotalConfirmed
			})
			setSortTotal(true)
		}
		else {
			data.sort((a, b) => {
				return b.TotalConfirmed - a.TotalConfirmed
			})
			setSortTotal(false)
		}
	}

	return (
		<div>

			<table className='tableWrapper'>
				<thead>
					<tr>
						<th>№</th>
						<th>
							<span onClick={handleCountrySort}>Country</span>
						</th>
						<th>
							<span onClick={handleTotalSort}>Total Confirmed</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{
						data
							? data.map(({ Country, TotalConfirmed }, index) => {
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>
											<span onClick={getCountryInfo}>
												{Country}
											</span>
										</td>
										<td>{TotalConfirmed}</td>
									</tr>
								)
							})
							: null
					}
				</tbody>
			</table>
		</div>
	)
}

