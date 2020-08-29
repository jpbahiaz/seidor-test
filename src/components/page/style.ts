import styled from 'styled-components'

const PageStyle = styled.div`
	padding: 30px 10px;

	background-color: white;
	border-radius: 3px;
	box-shadow: 0 5px 13px 0 var(--shadow);
	transition: 2s;
	max-height: 95vh;

	@media(min-width: 800px) {
		max-width: 800px;
		/* height: 300px; */
		margin: auto;
		margin-top: 200px;
	}
`

export default PageStyle
