import "./results-grid.css";
import SearchResult from "../search-result";

export default function ResultsGrid({ results }) {
	return (
		<div className="app-container results-grid">
			{results.map(result => (
				<SearchResult key={result.id} {...result} />
			))}
		</div>
	);
}
