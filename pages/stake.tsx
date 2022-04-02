import Image from 'next/image';
import { useAccount, useConnect } from 'wagmi';
import { shortenAddress } from '@/utils/wallet';

const Stake = () => {
	const [{ data, error }, connect] = useConnect();
	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});

	return (
		<div>
			{data.connectors.map((connector) => (
				<button
					// disabled={!connector.ready}
					key={connector.id}
					onClick={() => connect(connector)}
				>
					{connector?.name}
					{!connector.ready && ' (unsupported)'}
				</button>
			))}

			{error && <div>{error?.message ?? 'Failed to connect'}</div>}
			{accountData ? (
				<div>
					{accountData.ens ? (
						<Image
							src={`${accountData.ens?.avatar}`}
							alt="ENS Avatar"
							layout="fill"
						/>
					) : null}
					<div>
						{accountData.ens?.name
							? `${accountData.ens?.name}`
							: shortenAddress(accountData.address)}
					</div>
					<div>Connected to {accountData?.connector?.name}</div>
					<button onClick={disconnect}>Disconnect</button>
				</div>
			) : null}
		</div>
	);
};

export default Stake;
