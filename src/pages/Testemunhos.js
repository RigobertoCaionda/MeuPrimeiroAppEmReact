import React from 'react';
import styled from 'styled-components';
function Testemunhos(props){
	const Div = styled.div`
		background-color:pink;
		width:100%;
		height:400px;
		display:flex;
		justify-content:center;
		align-items:center;
		font-size:3rem;
		color:#fff;
	`;
	return(
			<Div>{props.children}</Div>
		);
}
export default Testemunhos;