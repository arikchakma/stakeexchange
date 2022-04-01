import type { NextPage } from 'next';
import { Logo } from '../components/icons/Logo';

const Home: NextPage = () => {
	return (
		<div className="bg-black text-white">
			<Logo />
		</div>
	);
};

export default Home;
