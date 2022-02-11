import { useState, useEffect, useCallback } from "react";

import PageWithHeader from "../../components/page-with-header";
import "./home.css";
import SearchBar from "../../components/search-bar";
import ResultsGrid from "../../components/results-grid";
import AddDevModal from "../../components/add-dev-modal";
import LoadingSpinner from "../../components/loading-spinner";
import { getAllDevs } from "../../api";

export default function Home() {
	const [showModal, setShowModal] = useState(false);
	const [allDevs, setAllDevs] = useState(null);
	const [results, setResults] = useState(null);
	const [query, setQuery] = useState("");

	const fetchAllDevs = useCallback(async () => {
		const res = (await getAllDevs()).data;
		setAllDevs(res);
		setResults(res);
	}, []);

	useEffect(() => {
		fetchAllDevs();
	}, [fetchAllDevs]);

	return (
		<PageWithHeader>
			{showModal && (
				<AddDevModal setShowModal={setShowModal} fetchAllDevs={fetchAllDevs} />
			)}
			<SearchBar
				query={query}
				setQuery={setQuery}
				setResults={setResults}
				allDevs={allDevs}
			/>
			{!results ? (
				<LoadingSpinner />
			) : allDevs.length === 0 ? (
				<div className="flex-center no-devs">No developers added yet</div>
			) : (
				<>
					<ResultsGrid results={results} />
					<div className="flex-center could-not-find">
						<h3>Could not find what you were looking for?</h3>
					</div>
				</>
			)}
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
