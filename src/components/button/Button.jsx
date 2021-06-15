import React from 'react'

import './Button.scss'

export default function Button({ value, onClick }) {
	return (
		<div>
			<button
				className='button'
				onClick={onClick}
			>
				{value}
			</button>
		</div>
	)
}
