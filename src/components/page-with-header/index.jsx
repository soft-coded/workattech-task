import "./page-with-header.css";
import Header from "../header";

export default function PageWithHeader({ children, className }) {
	return (
		<div className={`page-with-header ${className || ""}`}>
			<Header />
			{children}
		</div>
	);
}
