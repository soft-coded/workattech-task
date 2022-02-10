import "./profile.css";
import githubLogo from "../../assets/profile-icons/github.png";
import linkedinLogo from "../../assets/profile-icons/linkedin.png";
import codechefLogo from "../../assets/profile-icons/codechef.png";
import hackerrankLogo from "../../assets/profile-icons/hackerrank.png";
import twitterLogo from "../../assets/profile-icons/twitter.png";
import mediumLogo from "../../assets/profile-icons/medium.png";

const repos = [
	{ name: "code-template", updatedOn: "Updated on 9 Jul 2020" },
	{
		name: "get-a-software-engineering-job",
		updatedOn: "Updated on 9 Jul 2020",
		description: "Get a Software Engineering Job - Ultimate Guide"
	}
];

export default function Profile() {
	return (
		<div className="profile-page">
			<header>
				<h4>The Developer Profile</h4>
				<h4>All Developers</h4>
			</header>
			<div className="flex-center content">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 0 24 24"
					width="24"
					className="avatar"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
				</svg>
				<div className="user-description">
					<h2>Gaurav Chandak</h2>
					<p>
						<span>Building workat.tech;</span>
						<span>
							Previously Software Engineer at @Flipkart, @microsoft and @tracxn
						</span>
					</p>
					<div className="icons">
						<img src={githubLogo} alt="github" />
						<img src={hackerrankLogo} alt="hackerrank" />
						<img src={codechefLogo} alt="codechef" />
						<img src={linkedinLogo} alt="linkedin" />
						<img src={mediumLogo} alt="medium" />
						<img src={twitterLogo} alt="twitter" />
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 0 24 24"
							width="24"
						>
							<path d="M0 0h24v24H0z" fill="none" />
							<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
						</svg>
					</div>
					<div className="quick-info">
						<div className="flex-center pair">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
							</svg>
							<h5>Bangalore</h5>
						</div>
						<div className="flex-center pair">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
							</svg>
							<h5>workat.tech</h5>
						</div>
						<div className="flex-center pair">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
							</svg>
							<h5>https://workat.tech</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="repositories">
				<div className="flex-center">
					<h1>Github repositories</h1>
				</div>
				<div className="repos-container">
					{repos.map((repo, i) => (
						<div key={i} className="repo">
							<div className="title">
								<h3>{repo.name}</h3>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									enable-background="new 0 0 24 24"
									height="24"
									viewBox="0 0 24 24"
									width="24"
								>
									<rect fill="none" height="24" width="24" />
									<path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z" />
								</svg>
								<p>{repo.updatedOn}</p>
							</div>
							{repo.description && (
								<div className="description">{repo.description}</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
