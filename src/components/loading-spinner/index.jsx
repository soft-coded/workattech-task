import "./loading-spinner.css";

export default function LoadingSpinner() {
	return (
		<div className="flex-center spinner-wrapper">
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
