import Head from 'next/head';

export default function Container(props: any) {
	const { children, ...customMeta } = props;

	return (
		<div>
			<Head>
				<title>Stake Exchange</title>
			</Head>
			<main>{children}</main>
		</div>
	);
}
