import { useState, useRef, useCallback } from "react";

import "./add-dev-modal.css";
import githubLogo from "../../assets/profile-icons/github.png";
import linkedinLogo from "../../assets/profile-icons/linkedin.png";
import codechefLogo from "../../assets/profile-icons/codechef.png";
import hackerrankLogo from "../../assets/profile-icons/hackerrank.png";
import twitterLogo from "../../assets/profile-icons/twitter.png";
import mediumLogo from "../../assets/profile-icons/medium.png";
import { createDev } from "../../api";

export default function AddDevModal({ setShowModal, fetchAllDevs }) {
	const [error, setError] = useState(null);
	const githubRef = useRef(null);
	const linkedinRef = useRef(null);
	const codechefRef = useRef(null);
	const hackerrankRef = useRef(null);
	const twitterRef = useRef(null);
	const mediumRef = useRef(null);

	const handleSubmit = useCallback(
		async e => {
			e.preventDefault();
			setError(null);

			const payload = {
				github_id: githubRef.current.value,
				linkedin_id: linkedinRef.current.value,
				codechef_id: codechefRef.current.value,
				hackerrank_id: hackerrankRef.current.value,
				twitter_id: twitterRef.current.value,
				medium_id: mediumRef.current.value
			};

			try {
				await createDev(payload);
				setShowModal(false);
				fetchAllDevs();
			} catch (err) {
				setError(err.message);
			}
		},
		[fetchAllDevs, setShowModal]
	);

	return (
		<>
			<div className="backdrop" onClick={() => setShowModal(false)} />
			<div className="fixed-center add-dev-modal">
				<header>
					<h4>Add developer profile</h4>
				</header>
				{error && <div className="flex-center form-error">{error}</div>}
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="github">
							<div className="image-container">
								<img src={githubLogo} alt="github" />
							</div>
							<span>Github*</span>
						</label>
						<input
							ref={githubRef}
							type="text"
							id="github"
							className="modal-input"
							placeholder="gcnit"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="linkedin">
							<div className="image-container">
								<img src={linkedinLogo} alt="linkedin" />
							</div>
							<span>Linkedin</span>
						</label>
						<input
							ref={linkedinRef}
							type="text"
							id="linkedin"
							className="modal-input"
							placeholder="gcnit"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="codechef">
							<div className="image-container">
								<img src={codechefLogo} alt="codechef" />
							</div>
							<span>Codechef</span>
						</label>
						<input
							ref={codechefRef}
							type="text"
							id="codechef"
							className="modal-input"
							placeholder="gcnit"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="hackerrank">
							<div className="image-container">
								<img src={hackerrankLogo} alt="hackerrank" />
							</div>
							<span>Hackerrank</span>
						</label>
						<input
							ref={hackerrankRef}
							type="text"
							id="hackerrank"
							className="modal-input"
							placeholder="gcnit"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="twitter">
							<div className="image-container">
								<img src={twitterLogo} alt="twitter" />
							</div>
							<span>Twitter</span>
						</label>
						<input
							ref={twitterRef}
							type="text"
							id="twitter"
							className="modal-input"
							placeholder="gcnit"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="medium">
							<div className="image-container">
								<img src={mediumLogo} alt="medium" />
							</div>
							<span>Medium</span>
						</label>
						<input
							ref={mediumRef}
							type="text"
							id="medium"
							className="modal-input"
							placeholder="gcnit"
						/>
					</div>
					<footer>
						<div className="buttons">
							<button
								type="reset"
								className="secondary-button"
								onClick={() => setShowModal(false)}
							>
								Cancel
							</button>
							<button type="submit" className="primary-button">
								Submit
							</button>
						</div>
					</footer>
				</form>
			</div>
		</>
	);
}
