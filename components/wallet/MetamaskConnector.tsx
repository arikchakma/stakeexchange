import { useAccount, useBalance } from 'wagmi';
import { shortenAddress } from '@/utils/wallet';

import MetamaskSkeleton from '../skeletons/MetamaskSkeleton';

export default function MetamaskConnector() {
	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});

	const [{ data: balanceData, error, loading }, getBalance] = useBalance({
		addressOrName: accountData?.address,
	});

	if (!accountData) return null;

	if (loading || !accountData) return <MetamaskSkeleton />;

	return (
		<>
			{accountData ? (
				<div className="flex items-center">
					<div className="flex items-center gap-2 rounded bg-neutral-800 p-[2px]">
						{/* Balance in ETH */}
						<span className="px-2 py-1">
							{balanceData?.formatted} {balanceData?.symbol}
						</span>
						<div className="flex items-center gap-2 rounded bg-neutral-900 px-2 py-1">
							{/* ENS Avatar */}
							<div className="h-5 w-5 rounded-xl bg-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
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
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}
