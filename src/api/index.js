import axios from "axios";

export const baseURL =
	process.env.REACT_APP_SERVER_URL || "http://localhost:5000/api";
const timeout = 15000; // 15s

const apiClient = axios.create({
	baseURL,
	timeout
});

apiClient.interceptors.response.use(undefined, err => {
	return Promise.reject(
		err.response?.data || { message: "Something went wrong" }
	);
});

export const getAllDevs = () => apiClient.get("/developers");

export const getOneDev = id => apiClient.get("/developers/" + id);

export const createDev = payload => apiClient.post("/developers", payload);

export const deleteDev = id => apiClient.delete("/developers/" + id);
