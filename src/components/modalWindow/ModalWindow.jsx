import React from 'react'
import { useDispatch } from 'react-redux'

import { closeModal } from '../../redux/actions/actionCreators/modalActions'
import './ModalWindow.scss'
import InfoBlock from '../../components/infoBlock/InfoBlock'
import Button from '../../components/button/Button'
import heart from '../../images/Heart.png'
import skull from '../../images/Skull.png'
import life from '../../images/Life.png'

export default function ModalWindow({ data, isOpen }) {

	const dispatch = useDispatch()
	const handleCloseModal = () => {
		dispatch(closeModal())
	}



	return (
		<div
			className={isOpen ? 'modalWrapper open' : 'modalWrapper'}
			onClick={handleCloseModal}
		>
			<div
				className={isOpen ? "modalContent open" : 'modalContent'}
				onClick={(e) => e.stopPropagation()}
			>
				<h2>{data.Country}</h2>
				<InfoBlock
					src={heart}
					name='Total Confirmed'
					nameInfo={data.Confirmed}
				/>
				<InfoBlock
					src={skull}
					name='Total Death'
					nameInfo={data.Deaths}
				/>
				<InfoBlock
					src={life}
					name='Total Recovered'
					nameInfo={data.Recovered}
				/>
				<Button
					onClick={handleCloseModal}
					value='OK'
				/>
			</div>
		</div>
	)
}
