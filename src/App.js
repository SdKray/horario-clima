import React, { Component } from 'react';
import Hora from './components/Hora';
import axios from 'axios';
/* 
const urlImage =
	'https://images.pexels.com/photos/5173/houses-village-italy-architecture.jpg';
 */
export default class App extends Component {
	state = {
		fondo: ''
	};

	async componentDidMount() {
		const res = await axios.get('https://api.pexels.com/v1/photos/05172', {
			headers: {
				Authorization: '563492ad6f917000010000013be95a6b5ddd4becb63a2584e283c453'
			}
		});
		this.setState({ fondo: res.data.src.original });
		console.log(this.state.fondo);
	}

	render() {
		return (
			<div style={{ width: '100%', height: '100vh' }}>
				<img
					src={this.state.fondo}
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					alt='radomImage'
				/>
				<div
					style={{
						position: 'absolute',
						top: 0,
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Hora />
				</div>
			</div>
		);
	}
}
