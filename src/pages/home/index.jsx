import { useState } from "react";

import PageWithHeader from "../../components/page-with-header";
import "./home.css";
import SearchBar from "../../components/search-bar";
import ResultsGrid from "../../components/results-grid";
import AddDevModal from "../../components/add-dev-modal";

const searchResults = [
	{ id: 1, name: "test 1" },
	{ id: 2, name: "test 2" },
	{ id: 3, name: "test 3" },
	{ id: 4, name: "test 4" },
	{ id: 5, name: "test 5" },
	{ id: 6, name: "test 6" },
	{ id: 7, name: "test 7" },
	{ id: 8, name: "test 8" },
	{ id: 9, name: "test 9" },
	{ id: 10, name: "test 10" }
];

export default function Home() {
	const [showModal, setShowModal] = useState(false);

	return (
		<PageWithHeader>
			{showModal && <AddDevModal setShowModal={setShowModal} />}
			<SearchBar />
			<ResultsGrid results={searchResults} />
			<div className="flex-center could-not-find">
				<h3>Could not find what you were looking for?</h3>
			</div>
			<div className="flex-center">
				<button
					className="flex-center add-info"
					onClick={() => setShowModal(true)}
				>
					Add developer info
				</button>
			</div>
		</PageWithHeader>
	);
}
