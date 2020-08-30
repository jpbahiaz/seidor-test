import styled from 'styled-components'
import { displayFlexColumn } from '@/common/styles'

const PageStyle = styled.div`
	${displayFlexColumn}
	height: 90vh;

	.page-content {
		padding: 30px 10px;

		background-color: white;
		border-radius: 3px;
		box-shadow: 0 5px 13px 0 var(--shadow);
		transition: 2s;
		max-height: 70vh;
		min-height: 40vh;
		width: fit-content;
	}

	@media(min-width: 800px) {
		.page-content {
			padding: 30px;
			width: 60vw;
			/* height: 300px; */
			margin: auto;
		}
	}
`

export default PageStyle
