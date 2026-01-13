import React, { useState, useEffect } from "react";
import CreditorTable from "./CreditorTable";
import CreditorForm from "./CreditorForm";
import api from "./apis/api";

export default function App() {
	const [creditors, setCreditors] = useState([]);

	const fetchCreditors = async () => {
		const response = await api.get("/creditors");

		setCreditors(response.data);
	};

	useEffect(() => {
		fetchCreditors();
	}, []);

	const addCreditor = (newCreditor) => {
		setCreditors((prev) => [...prev, newCreditor]);
	};

	return (
		<div className='App'>
			<CreditorForm onAdd={addCreditor} />
			<h2>Creditors</h2>

			<CreditorTable creditors={creditors} />
		</div>
	);
}
