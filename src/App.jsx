import React, { useState, useEffect } from "react";
import CreditorTable from "./CreditorTable";
import api from "./apis/api";

export default function App() {
	// Set state for creditors and form inputs
	const [creditors, setCreditors] = useState([]);
	const [form, setForm] = useState({
		name: "",
		amountDue: "",
		payDate: "",
	});

	// Fetch creditors from API
	const fetchCreditors = async () => {
		const response = await api.get("/creditors");

		setCreditors(response.data);
	};

	// Submit data to server, update state
	const handleSubmit = async (e) => {
		e.preventDefault();

		// submit to server...
		const res = await api.post("/creditors", {
			name: form.name,
			amountDue: Number(form.amountDue),
			payDate: Number(form.payDate),
		});

		//... update state
		setCreditors((prev) => [...prev, res.data]);

		// reset form inputs
		setForm({ name: "", amountDue: "", payDate: "" });
	};

	// update any change made to input fields in the form
	const handleChange = (e) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	useEffect(() => {
		fetchCreditors();
	}, []);

	return (
		<div className='App'>
			<form onSubmit={handleSubmit}>
				<h2>Add Creditor</h2>
				<label>Name</label>
				<input type='text' name='name' onChange={handleChange} value={form.name} />
				<label>Amount Due</label>
				<input type='number' name='amountDue' onChange={handleChange} value={form.amountDue} />
				<label>Pay Date</label>
				<input type='number' name='payDate' onChange={handleChange} value={form.payDate} min='1' max='31' />
				<button type='submit'>Add Creditor</button>
			</form>
			<h2>Creditors</h2>

			<CreditorTable creditors={creditors} />
		</div>
	);
}
