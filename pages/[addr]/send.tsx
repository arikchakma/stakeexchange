export default function Send({ a }: { a: any }) {
	console.log(a);
	return <div>send</div>;
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
