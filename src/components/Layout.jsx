import { Header } from './Header';
import { Nav } from './Nav';

export const Layout = (props) => {
	return (
		<div className="main-grid">
			<aside>
				<Header />
				<Nav />
			</aside>
			<main>{props.children}</main>
		</div>
	);
};
