export default function Send({ a }: { a: any }) {
	return (
		<div>
			<h1>Send</h1>
			<p>Transfer tokens to any address</p>
			<p>Send directly to any supported address, straight from your wallet.</p>
		</div>
	);
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { addr: '0x' } }],
		fallback: false,
	};
}

export async function getStaticProps({}) {
	return { props: { a: '0x' } };
}
