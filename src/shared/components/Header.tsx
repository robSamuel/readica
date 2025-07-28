import { Link } from 'react-router-dom';

const Header: React.FC = () => (
	<header className="flex justify-between items-center px-4 py-3 border-b">
		<Link to="/" className="text-xl font-bold">
			Readica
		</Link>
	</header>
);

export default Header;
