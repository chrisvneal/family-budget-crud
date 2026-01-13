import React, { useState, useEffect } from "react";
import CreditorTable from "./CreditorTable";
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

	return (
		<div className='App'>
			<h2>Creditors</h2>

			<CreditorTable creditors={creditors} />
		</div>
	);
}
