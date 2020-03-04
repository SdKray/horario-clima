import React, { Component } from 'react';

export default class Hora extends Component {
	render() {
		let d = new Date();
		return (
			<div className='rectangle'>
				<div className='container'>
					<span className='hora'>
						{d.getHours()}:{d.getMinutes()}
					</span>
					<div>
						<span className='fecha'>
							Miércoles {d.getDate()} de {d.getMonth() + 1} del {d.getFullYear()}
						</span>
					</div>
				</div>
				<div className='container'>
					<span className='grados'>31º</span>
					<span className='cuidad'>Pachuca</span>
				</div>
			</div>
		);
	}
}
