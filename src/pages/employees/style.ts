import styled from 'styled-components'
import { displayFlexColumn } from '@/common/styles'

const EmployeesStyle = styled.div`
	${displayFlexColumn}
	height: 100%;

	.content {
		color: white;
		width: 90%;
		max-width: 600px;
		background: var(--primary);
		border-radius: 3px;
		margin-top: 30px;
		padding: 20px 0;

		${displayFlexColumn}
	}

	.title {
		display: block;
		text-align: center;
		font-size: 30px;
		font-weight: bold;
		margin: 10px 0;
	}

	.subtitle {
		display: block;
		text-align: center;
		width: 80%;
	}

	.links {
		${displayFlexColumn}
		width: 100%;
		margin-top: 20px;

		a {
			text-align: center;
			text-decoration: none;
			color: white;
			font-size: 20px;
			font-weight: bold;
			background-color: var(--secondary);
			border-radius: 3px;
			width: 60%;
			padding: 10px 0;
			margin: 5px 0;
		}
	}

	@media(max-width: 800px) {
		img {
			width: 90vw;
		}
	}
`

export default EmployeesStyle
