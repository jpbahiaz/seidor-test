import styled from 'styled-components'
import { displayFlexColumn } from '@/common/styles'

const PageStyle = styled.div`
	height: calc(100vh - 50px);

	.page-content {
		padding: 30px 10px;
		margin: 10px;

		background-color: white;
		border-radius: 3px;
		box-shadow: 0 5px 13px 0 var(--shadow);
		transition: .8s;
		width: fit-content;
	}

	@media(min-width: 800px) {
		margin-top: 50px;
		.page-content {
			padding: 30px;
			width: 80vw;
			/* height: 300px; */
			margin: auto;
			max-height: 80vh;
		}
	}
`

export default PageStyle
