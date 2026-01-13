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

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className='App'>
			<form onSubmit={handleSubmit}>
				<h2>Add Creditor</h2>
				<label>Name</label>
				<input type='text' name='name' />
				<label>Amount Due</label>
				<input type='number' name='amountDue' />
				<label>Pay Date</label>
				<input type='number' name='payDate' />
				<button type='submit'>Add Creditor</button>
			</form>
			<h2>Creditors</h2>

			<CreditorTable creditors={creditors} />
		</div>
	);
}
