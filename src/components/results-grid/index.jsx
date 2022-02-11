import "./results-grid.css";
import SearchResult from "../search-result";

export default function ResultsGrid({ results }) {
	return (
		<div className="app-container results-grid">
			{results.map((result, i) => (
				<SearchResult key={i} {...result} />
			))}
		</div>
	);
}
