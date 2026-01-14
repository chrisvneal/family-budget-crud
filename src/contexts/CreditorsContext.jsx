import React, { useState, createContext } from "react";
import api from "../apis/api";

const CreditorsContext = createContext();

function CreditorsProvider({ children }) {
	// Set state for creditors and form inputs
	const [creditors, setCreditors] = useState([]);

	// Fetch creditors from API
	const fetchCreditors = async () => {
		const response = await api.get("/creditors");

		setCreditors(response.data);
	};

	const updateCreditors = (newCreditor) => {
		setCreditors((prev) => [...prev, newCreditor]);
	};

	const handleDelete = async (id) => {
		await api.delete(`/creditors/${id}`);

		setCreditors((prev) => prev.filter((c) => c.id !== id));
	};

	const creditorInfo = {
		creditors,
		fetchCreditors,
		updateCreditors,
		handleDelete,
	};

	return <CreditorsContext.Provider value={creditorInfo}>{children}</CreditorsContext.Provider>;
}

export default CreditorsContext;
export { CreditorsProvider };
