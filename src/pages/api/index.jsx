import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { baseURL } from "../../api";

export default function RedirectToAPI() {
	const pathname = useLocation().pathname.replace("/api", "");

	useEffect(() => {
		window.location.href = baseURL + pathname;
	}, [pathname]);

	return null;
}
