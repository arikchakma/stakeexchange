export default function MetamaskSkeleton() {
	return (
		<div className="flex items-center">
			<div className="flex items-center gap-1 rounded bg-neutral-800 p-[2px]">
				<div className="mx-2 h-6 w-14 animate-pulse rounded bg-white/30 py-1 duration-150" />
				<div className="flex items-center gap-2 rounded bg-neutral-900 px-2 py-1">
					<div className="h-5 w-5 animate-pulse rounded-xl bg-white/30 duration-150" />
					<span className="h-6 w-24 animate-pulse rounded bg-white/30 font-normal duration-150" />
					<div className="h-5 w-5 animate-pulse rounded-full bg-white/30 duration-150" />
					<div className="h-5 w-5 animate-pulse rounded-full bg-white/30 duration-150" />
				</div>
			</div>
		</div>
	);
}
