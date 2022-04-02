import type { NextPage } from 'next';
import NextLink from 'next/link';

import { Logo } from '@/components/icons/Logo';
import Container from '@/layouts/Container';

const Home: NextPage = () => {
	return (
		<Container>
			<div className="py-2 border-b border-white/10">
				<div className="layout-container">
					<NextLink href="/">
						<a className="cursor-pointer">
							<Logo />
						</a>
					</NextLink>
				</div>
			</div>
			<div>
				<h1>Connect your wallet</h1>
			</div>
		</Container>
	);
};

export default Home;
