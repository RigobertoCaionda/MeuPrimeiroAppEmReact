import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
function Hotel(props){
	const Div = styled.div`
		background-color:blue;
		width:100%;
		height:400px;
		display:flex;
		justify-content:center;
		align-items:center;
		font-size:3rem;
		color:#fff;
	`;
	const handleFelipe = ()=>{
		props.setName('Felipe');
	};
	return(
			<Div>
			{props.children}
			O nome e:{props.name}
			<br /><br />
			<button onClick={handleFelipe}>Trocar nome para Felipe</button>
			</Div>
		);
}
const mapStateToProps = state =>({
	name: state.usuario.name
});
const mapDispatchToProps = dispatch =>({
	setName: (newName) => dispatch({
		type: 'SET_NAME',
		payload: {name: newName}
	})
});
export default connect(mapStateToProps, mapDispatchToProps)(Hotel);