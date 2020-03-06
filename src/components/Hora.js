import React, { useEffect, useState } from 'react';

export default function Hora() {
	let [clima, obtnerClima] = useState([]);
	let d = new Date();
	let key = '7244ae991b10464396e1125c249da989';
	let consultarApi = async () => {
		let url = `https://api.weatherbit.io/v2.0/current?city=Pachuca&key=${key}`;
		let res = await fetch(url);
		let clima = await res.json();
		obtnerClima(clima.data);
	};
	useEffect(() => {
		consultarApi();
	}, []);
	console.log(clima);
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
				{clima.length > 0 ? <span className='grados'>{clima[0].temp}º</span> : null}
				<span className='cuidad'>Pachuca</span>
			</div>
		</div>
	);
}
