import styled from 'styled-components'
import { displayFlexColumn } from '@/common/styles'

const ShowEmployeesStyle = styled.div`
	height: 80%;

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
			text-align: right;
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
		max-height: 60vh;
		overflow-y: auto;
	}

	.employees-list {
		${displayFlexColumn}

		.employee-item {
			width: 100%;
			border: 1px solid black;
			border-radius: 3px;
			margin: 5px 0;
			padding: 5px;
			
			.prop:nth-child(2) {
				border-top: none;
			}

			.prop {
				padding: 5px 0 ;
				border-top: 1px solid black;

				strong {
					margin-right: 5px;
				}
			}
			.name {
				border-top: none;
				text-align: center;
				background: var(--primary);
				color: white;
				border-radius: 3px;
			}
			.employee-actions {
				margin: 5px 0;
				text-align: center;
			}
		}
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

	.no-employees {
		width: fit-content;
    margin: auto;
    display: flex;
    flex-flow: column;
    background: var(--primary);
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    margin: 15px auto 30px;
		border-radius: 3px;

		a {
			font-size: 20px;
			font-weight: bold;
			border: none;
			border-radius: 3px;
			background-color: var(--secondary);
			color: white;
			width: 80%;
			margin: 10px auto 0;
			padding: 5px 0;
			text-decoration: none;
			text-align: center;
		}

		span {
			text-align: center;
		}
	}
`

export default ShowEmployeesStyle
