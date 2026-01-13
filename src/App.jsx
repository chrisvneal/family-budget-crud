import React, { useState, useEffect } from "react";
import CreditorTable from "./CreditorTable";
import api from "./apis/api";

export default function App() {
	const creditorList = [
		{
			id: 1,
			name: "Household Bank",
			payDate: 15,
			amountDue: 30.0,
		},
		{
			id: 2,
			name: "Capital One",
			payDate: 15,
			amountDue: 30.0,
		},
	];

	const [creditors, setCreditors] = useState([]);

	const fetchCreditors = async () => {
		try {
			const response = await api.get("/creditors");
			// console.log(response.data);
			setCreditors(response.data);
		} catch (error) {
			console.error("Error fetching creditors:", error);
		}
	};

	useEffect(() => {
		fetchCreditors();
	}, []);

	return (
		<div>
			<h2>Creditors</h2>

			<CreditorTable creditors={creditors} />
		</div>
	);
}
