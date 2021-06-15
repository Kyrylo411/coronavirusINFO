import React from 'react'

import search from '../../images/Vector.png'
import './Input.scss'

export default function Input({ type, placeholder, value, onChange }) {
	return (
		<div className='inputWrapper'>
			<input
				className='input'
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<img src={search} alt='input icon' />
		</div>
	)
}
