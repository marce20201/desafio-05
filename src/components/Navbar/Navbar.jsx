import Link from 'components/Link/Link'
import Logo from 'components/Logo/Logo'
import CartWidget from 'components/CartWidget/CartWidget'

import categories from 'utils/categories'

import {ListStyled, NavbarStyled} from './NavbarStyled'

const Navbar = () => (
	<NavbarStyled>
		<Logo />
		<div>
			<ListStyled>
				{
					categories.map(category => (
						<li key={category.name}>
							<Link href={category.path}>{category.name}</Link>
						</li>
					))
				}
			</ListStyled>
			<CartWidget />
		</div>
	</NavbarStyled>
)

export default Navbar
