import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
function Home(props){
	const Div = styled.div`
		background-color:red;
		width:100%;
		height:300px;
		display:flex;
		justify-content:center;
		align-items:center;
		font-size:2rem;
		color:#fff;
	`;
	const dispatch = useDispatch();
	const name = useSelector(state => state.usuario.name);
	const contador = useSelector(state => state.usuario.contador);
	const handleBonieky = ()=>{
		dispatch({
			type: 'SET_NAME',
			payload: {name: 'Bonieky'}
		});
	};
	const handleIncrement = () =>{
		dispatch({
			type: 'INCREMENT_CONTADOR'
		});
	};
	return(
			<Div>
			{props.children}
			Nome:{name}<br />
			Contagem: {contador}<br /><br />
			<button onClick={handleBonieky}>Setar nome para Bonieky</button>
			<button onClick={handleIncrement}>+1</button>
			</Div>
		);
}

export default Home;