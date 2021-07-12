import React from 'react';
import styled from 'styled-components';
function NotFound(props){
	const Div = styled.div`
		background-color:green;
		width:100%;
		height:300px;
		display:flex;
		justify-content:center;
		align-items:center;
		font-size:2rem;
		color:#fff;
	`;
	return(
			<Div>{props.children}</Div>
		);
}
export default NotFound;