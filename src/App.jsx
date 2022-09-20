import './App.css';

const navItems = [
	'Intro',
	'About',
	'Services',
	'Works',
	'FAQ',
	'Testimonials',
	'News',
	'Contact',
];

function App() {
	return (
		<div className="main-grid">
			<aside>
				<header>LOGO</header>
				<nav>
					<ol className="nav-items">
						{navItems.map((item, index) => {
							// tutaj pisz ternary operator
							return <li>{`0${index + 1}. ${item}`}</li>;
						})}
					</ol>
				</nav>
			</aside>
			<main></main>
		</div>
	);
}

export default App;
