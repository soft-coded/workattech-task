import "./add-dev-modal.css";
import githubLogo from "../../assets/profile-icons/github.png";
import linkedinLogo from "../../assets/profile-icons/linkedin.png";
import codechefLogo from "../../assets/profile-icons/codechef.png";
import hackerrankLogo from "../../assets/profile-icons/hackerrank.png";
import twitterLogo from "../../assets/profile-icons/twitter.png";
import mediumLogo from "../../assets/profile-icons/medium.png";

export default function AddDevModal({ setShowModal }) {
	return (
		<>
			<div className="backdrop" onClick={() => setShowModal(false)} />
			<div className="fixed-center add-dev-modal">
				<header>
					<h4>Add developer profile</h4>
				</header>
				<form>
					<div className="form-group">
						<label htmlFor="github">
							<div className="image-container">
								<img src={githubLogo} alt="github" />
							</div>
							<span>Github*</span>
						</label>
						<input
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
						<input type="text" id="codechef" className="modal-input" />
					</div>
					<div className="form-group">
						<label htmlFor="hackerrank">
							<div className="image-container">
								<img src={hackerrankLogo} alt="hackerrank" />
							</div>
							<span>Hackerrank</span>
						</label>
						<input type="text" id="hackerrank" className="modal-input" />
					</div>
					<div className="form-group">
						<label htmlFor="twitter">
							<div className="image-container">
								<img src={twitterLogo} alt="twitter" />
							</div>
							<span>Twitter</span>
						</label>
						<input type="text" id="twitter" className="modal-input" />
					</div>
					<div className="form-group">
						<label htmlFor="medium">
							<div className="image-container">
								<img src={mediumLogo} alt="medium" />
							</div>
							<span>Medium</span>
						</label>
						<input type="text" id="medium" className="modal-input" />
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
