import styled from "styled-components";
import { displayFlexColumn, displayFlexRow } from "@/common/styles";

const EmployeeFormStyle = styled.form`
	${displayFlexColumn}

	.field {
		${displayFlexColumn}
		margin: 5px;
		width: fit-content;
	}

	.group {
		${displayFlexRow}
		margin: 10px 0;
	}
`

export default EmployeeFormStyle
