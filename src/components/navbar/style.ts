import styled from "styled-components";
import { displayFlexRow } from "@/common/styles";

const NavbarStyle = styled.nav`
	${displayFlexRow}
	border: 1px solid var(--primary);
	border-radius: 3px;
	padding: 15px 0;

	img {
		width: 200px;
		margin-bottom: 20px;
	}

	.links {
		${displayFlexRow}
		margin-right: 20px;
		margin-left: auto;

		a {
			background-color: var(--primary);
			padding: 5px 10px;
			border-radius: 3px;
			text-decoration: none;
			color: white;
			margin: 0 5px;
		}
	}

	@media(min-width: 800px) {
		img {
			margin-left: 20px;
			margin-right: 50px;
			margin-bottom: 0;
		}
	}
`

export default NavbarStyle
