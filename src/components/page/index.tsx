import React, { ReactNode } from 'react'
import PageStyle from './style'

type TPage = {
	children: ReactNode
}

function Page({ children }: TPage) {
	return (
		<PageStyle>
			{ children }
		</PageStyle>
	)
}

export default Page