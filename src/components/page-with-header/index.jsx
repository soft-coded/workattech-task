import Header from "../header";

export default function PageWithHeader({ children, className }) {
	return (
		<div className={className}>
			<Header />
			{children}
		</div>
	);
}
