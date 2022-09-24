import './App.css';
import { Header } from './Header';
import { Nav } from './Nav';

function App() {
	return (
		<div className="main-grid">
			<aside>
				<Header />
				<Nav />
			</aside>
			<main></main>
		</div>
	);
}

export default App;
