import styled from "styled-components";
import { displayFlexColumn, displayFlexRow } from "@/common/styles";

const EmployeeFormStyle = styled.form`
	${displayFlexColumn}
	margin: 10px 0;

	.field {
		${displayFlexColumn}
		margin: 5px;
		width: fit-content;

		label, input {
			font-size: 18px;
		}

		label {
			margin-right: auto;
			font-weight: bold;
		}
		
		input {
			padding: 5px;
			border: 1px solid var(--primary);
			border-radius: 3px;
			outline: none;

			&:focus {
				border: 2px solid var(--primary);
			}
		}
	}

	.group {
		${displayFlexRow}
	}

	.error {
		color: var(--danger);
		font-weight: bold;
	}

	button {
		cursor: pointer;
		font-size: 18px;
		color: white;
		padding: 5px 10px;
		border: none;
		outline: none;
		background-color: var(--primary);
		border-radius: 3px;
		margin-top: 10px;
	}
`

export default EmployeeFormStyle
