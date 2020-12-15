import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="navbar-fixed">
			<nav className="nav-wrapper  grey darken-4">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
