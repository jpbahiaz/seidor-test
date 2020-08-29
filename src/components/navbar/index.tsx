import React from 'react'
import NavbarStyle from './style'
import logo from '@/assets/images/logoSeidor.png'
import { Link, useHistory } from 'react-router-dom'

type TLink = {
	text: string;
	path: string;
}

type TNavbar = {
	links: TLink[]
}

function renderLinks(links: TLink[]) {
	return links.map((link: TLink, index: number) => (
		<Link key={`nav-link-${index+link.text}`} to={link.path}>{ link.text }</Link>
	))
}

function Navbar({ links }: TNavbar) {
	const history = useHistory()

	return (
		<NavbarStyle>
			<img onClick={() => history.push('/')} src={logo} alt=""/>
			<div className="links">
				{ renderLinks(links) }
			</div>
		</NavbarStyle>
	)
}

export default Navbar
