import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Provider, chain, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

// Chains for connectors to support
const chains = defaultChains;

// Set up connectors
const connectors = ({ chainId }: { chainId?: number | undefined }) => [
	new InjectedConnector({
		chains,
		options: { shimDisconnect: true },
	}),
];

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider autoConnect connectors={connectors}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
