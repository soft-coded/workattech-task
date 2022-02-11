import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./profile.css";
import githubLogo from "../../assets/profile-icons/github.png";
import linkedinLogo from "../../assets/profile-icons/linkedin.png";
import codechefLogo from "../../assets/profile-icons/codechef.png";
import hackerrankLogo from "../../assets/profile-icons/hackerrank.png";
import twitterLogo from "../../assets/profile-icons/twitter.png";
import mediumLogo from "../../assets/profile-icons/medium.png";
import { getOneDev } from "../../api";
import LoadingSpinner from "../../components/loading-spinner";

function profiles(user) {
	return [
		{
			logo: githubLogo,
			alt: "github",
			link: "https://github.com/" + user.github_id
		},
		{
			logo: linkedinLogo,
			alt: "linkedin",
			link: "https://linkedin.com/" + user.linkedin_id
		},
		{
			logo: codechefLogo,
			alt: "codechef",
			link: "https://codechef.com/" + user.codechef_id
		},
		{
			logo: hackerrankLogo,
			alt: "hackerrank",
			link: "https://hackerrank.com/" + user.hackerrank_id
		},
		{
			logo: twitterLogo,
			alt: "twitter",
			link: "https://twitter.com/" + user.twitter_id
		},
		{
			logo: mediumLogo,
			alt: "medium",
			link: "https://medium.com/" + user.medium_id
		}
	];
}

export default function Profile() {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const { username } = useParams();

	useEffect(() => {
		async function fetchUser() {
			try {
				const res = await getOneDev(username);
				setUser(res.data);
			} catch (err) {
				setError(err.message);
			}
		}
		fetchUser();
	}, [username]);

	return (
		<div className="profile-page">
			<header>
				<h4>The Developer Profile</h4>
				<Link to="/">
					<h4>All Developers</h4>
				</Link>
			</header>
			{!user && !error ? (
				<LoadingSpinner />
			) : error ? (
				<div className="flex-center error">{error}</div>
			) : (
				<>
					<div className="flex-center content">
						{user.avatar_url ? (
							<div className="avatar avatar-img">
								<img src={user.avatar_url} alt={user.id} />
							</div>
						) : (
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
						)}
						<div className="user-description">
							<h2>{user.name}</h2>
							<p>{user.bio}</p>
							<div className="icons">
								{profiles(user).map((info, i) => (
									<a key={i} href={info.link} target="_blank" rel="noreferrer">
										<img src={info.logo} alt={info.alt} />
									</a>
								))}
								<a href={"mailto:" + user.email}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 0 24 24"
										width="24"
									>
										<path d="M0 0h24v24H0z" fill="none" />
										<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
									</svg>
								</a>
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
									<h5>{user.location}</h5>
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
									<h5>{user.company}</h5>
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
									<h5>{user.blog}</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="repositories">
						<div className="flex-center">
							<h1>Github repositories</h1>
						</div>
						<div className="repos-container">
							{user.repos.map((repo, i) => (
								<div key={i} className="repo">
									<div className="title">
										<h3>{repo.name}</h3>
										<a href={repo.html_url} target="_blank" rel="noreferrer">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												enableBackground="new 0 0 24 24"
												height="24"
												viewBox="0 0 24 24"
												width="24"
											>
												<rect fill="none" height="24" width="24" />
												<path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z" />
											</svg>
										</a>
										<p>Updated on {new Date(repo.updated_at).toDateString()}</p>
									</div>
									{repo.description && (
										<div className="description">{repo.description}</div>
									)}
								</div>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
}
