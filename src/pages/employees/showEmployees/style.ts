import styled from 'styled-components'

const ShowEmployeesStyle = styled.div`
	height: 100%;

	table {
		th, td {
			text-align: left;
			padding: 5px 10px;
		}
		
		th {
			background-color: var(--primary);
			color: white;
			position: sticky;
			top: -1px;
		}
	}

	table, th, td {
		border: 1px solid black;
		border-collapse: collapse;
	}

	.employees-table {
		height: 75%;
		overflow-y: scroll;
	}
`

export default ShowEmployeesStyle
