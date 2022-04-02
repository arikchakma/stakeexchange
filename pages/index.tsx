import type { NextPage } from 'next';
import NextLink from 'next/link';

import { Logo } from '@/components/icons/Logo';
import Container from '@/layouts/Container';
import MetamaskConnector from '@/components/wallet/MetamaskConnector';

const Home: NextPage = () => {
	return (
		<Container>
			<div className="border-b border-white/10 py-2">
				<div className="layout-container flex items-center justify-between">
					<NextLink href="/">
						<a className="cursor-pointer">
							<Logo />
						</a>
					</NextLink>
					<MetamaskConnector />
				</div>
			</div>
			<div>
				<h1>Connect your wallet</h1>
			</div>
		</Container>
	);
};

export default Home;
