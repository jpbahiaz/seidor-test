import { createGlobalStyle } from "styled-components"

const AppStyle = createGlobalStyle`
	body {
		background-color: var(--background);
		height: fit-content;
	}

	:root {
		--primary: #155785;
		--secondary: #f8a53c;
		--background: #f9f6f7;
		--shadow: #0000009c;
	}
`

export default AppStyle
