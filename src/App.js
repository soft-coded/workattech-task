import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import Home from "./pages/home";
import Profile from "./pages/profile";

export default function App() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:username" element={<Profile />} />
			</Routes>
			<Footer />
		</main>
	);
}
