import React, { useState, useEffect } from "react";
import CreditorTable from "./CreditorTable";
import CreditorForm from "./CreditorForm";
import api from "./apis/api";
import "./styles/App.scss";

export default function App() {
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

	useEffect(() => {
		fetchCreditors();
	}, []);

	const handleDelete = async (id) => {
		const updatedCreditors = creditors.filter((creditor) => creditor.id !== id);

		await api.delete(`/creditors/${id}`);

		setCreditors(updatedCreditors);
	};

	const allCreditors = creditors;

	return (
		<div className='App'>
			<CreditorForm onAdd={updateCreditors} />

			<h2>Creditors</h2>
			<CreditorTable creditors={allCreditors} onDelete={handleDelete} />
		</div>
	);
}
