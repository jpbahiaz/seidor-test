import styled from 'styled-components'

const ShowEmployeesStyle = styled.div`
	height: 100%;

	table {
		margin: auto;
		border: 1px solid var(--primary);
		border-collapse: collapse;
		display: block;
		width: fit-content;
		border-radius: 3px;

		tbody {
			tr:last-child {
				td {
					border-bottom: none;
				}
			}
		}

		th, td {
			text-align: left;
			padding: 5px 10px;
			border-bottom: 1px solid black;
		}
		
		th {
			background-color: var(--primary);
			color: white;
			position: sticky;
			top: -1px;
		}
	}

	.employees-table {
		height: 75%;
		overflow-y: auto;
	}

	.employee-actions {
		button {
			cursor: pointer;
			border: none;
			border-radius: 3px;
			background-color: var(--danger);
			padding: 5px;
			color: white;
			margin: 0 5px;
		}

		a {
			text-decoration: none;
			color: white;
			padding: 5px;
			margin: 0 5px;
			background-color: var(--secondary);
			border-radius: 3px;
		}
	}
`

export default ShowEmployeesStyle
