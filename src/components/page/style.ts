import styled from 'styled-components'
import { displayFlexColumn } from '@/common/styles'

const PageStyle = styled.div`
	${displayFlexColumn}
	height: 85vh;

	.page-content {
		padding: 30px 10px;

		background-color: white;
		border-radius: 3px;
		box-shadow: 0 5px 13px 0 var(--shadow);
		transition: 2s;
		max-height: 95vh;
		min-height: 40vh;
		width: fit-content;
	}

	@media(min-width: 800px) {
		.page-content {
			padding: 30px;
			max-width: 80vw;
			/* height: 300px; */
			margin: auto;
			margin-top: 200px;
		}
	}
`

export default PageStyle
