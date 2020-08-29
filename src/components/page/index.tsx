import React, { ReactNode } from 'react'
import PageStyle from './style'

type TPage = {
	children: ReactNode
}

function Page({ children }: TPage) {
	return (
		<PageStyle>
			<div className="page-content">
				{ children }
			</div>
		</PageStyle>
	)
}

export default Page