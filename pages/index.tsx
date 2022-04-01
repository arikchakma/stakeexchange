import type { NextPage } from 'next';
import NextLink from 'next/link';
import { Logo } from '@/components/icons/Logo';

const Home: NextPage = () => {
	return (
		<div>
			<NextLink href="/">
				<a className="cursor-pointer">
					<Logo />
				</a>
			</NextLink>
		</div>
	);
};

export default Home;
