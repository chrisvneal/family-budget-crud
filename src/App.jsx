import React, { useState, useEffect } from "react";
import CreditorTable from "./CreditorTable";
import api from "./apis/api";

export default function App() {
	const [creditors, setCreditors] = useState([]);
	const [form, setForm] = useState({
		name: "",
		amountDue: "",
		payDate: "",
	});

	const fetchCreditors = async () => {
		const response = await api.get("/creditors");

		setCreditors(response.data);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await api.post("/creditors", {
			name: form.name,
			amountDue: Number(form.amountDue),
			payDate: Number(form.payDate),
		});

		setCreditors((prev) => [...prev, res.data]);

		setForm({ name: "", amountDue: "", payDate: "" });
	};

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
				<input type='number' name='payDate' onChange={handleChange} value={form.payDate} />
				<button type='submit'>Add Creditor</button>
			</form>
			<h2>Creditors</h2>

			<CreditorTable creditors={creditors} />
		</div>
	);
}
