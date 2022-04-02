import { useAccount, useBalance } from 'wagmi';
import { shortenAddress } from '@/utils/wallet';

export default function MetamaskConnector() {
	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});

	const [{ data: balanceData, error, loading }, getBalance] = useBalance({
		addressOrName: accountData?.address,
	});

	if (loading || !accountData) return <MetamaskSkeletonState />;

	return (
		<>
			{accountData ? (
				<div className="flex items-center">
					<div className="flex items-center gap-2 bg-neutral-800 rounded p-[2px]">
						{/* Balance in ETH */}
						<span className="px-2 py-1">
							{balanceData?.formatted} {balanceData?.symbol}
						</span>
						<div className="flex items-center gap-2 bg-neutral-900 px-2 py-1 rounded">
							{/* ENS Avatar */}
							<div className="bg-white w-5 h-5 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
								{/* <Image src="/favicon.ico" width={20} height={20} alt="" /> */}
							</div>
							{/* Address */}
							<span className="font-normal text-white/70">
								{accountData.ens?.name
									? `${accountData.ens?.name}`
									: shortenAddress(accountData.address)}
							</span>
							{/* Copy to Clipboard */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 cursor-pointer"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
								/>
							</svg>
							{/* Dropdown */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 cursor-pointer"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

function MetamaskSkeletonState() {
	return (
		<div className="flex items-center">
			<div className="flex items-center gap-1 bg-neutral-800 rounded p-[2px]">
				<div className="mx-2 py-1 w-14 h-6 bg-white/30 rounded animate-pulse duration-150" />
				<div className="flex items-center gap-2 bg-neutral-900 px-2 py-1 rounded">
					<div className="bg-white/30 w-5 h-5 rounded-xl animate-pulse duration-150" />
					<span className="font-normal w-24 h-6 bg-white/30 rounded animate-pulse duration-150" />

					<div className="w-5 h-5 bg-white/30 rounded-full animate-pulse duration-150" />
					<div className="w-5 h-5 bg-white/30 rounded-full animate-pulse duration-150" />
				</div>
			</div>
		</div>
	);
}
