import React from 'react'

import './InfoBlock.scss'

export default function InfoBlock({ src, name, nameInfo }) {
	return (
		<div className='infoBlock'>
			<div className='imgNameBlock'>
				<img src={src} alt='icon' />
				<span>{name}</span>
			</div>
			<span className='nameInfo'>{nameInfo}</span>
		</div>
	)
}
