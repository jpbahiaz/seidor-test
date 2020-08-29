import React from 'react'
import PageHeaderStyle from './style'

type TPageHeader = {
	title: string;
}

function PageHeader({ title }: TPageHeader) {
	return (
		<PageHeaderStyle>
			<h2>{ title }</h2>
		</PageHeaderStyle>
	)
}

export default PageHeader
