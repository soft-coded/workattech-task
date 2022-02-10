import "./header.css";
import headerImage from "../../assets/illustrations/header-photo.png";

export default function Header() {
	return (
		<>
			<header className="flex-center app-header">
				<div className="title">
					<h1>The Developer</h1>
					<h1>Repository</h1>
				</div>
				<div className="image-container">
					<img src={headerImage} alt="header" />
				</div>
			</header>
			<div className="flex-center app-description">
				<h2>Explore developer profiles</h2>
			</div>
		</>
	);
}
