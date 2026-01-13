import React, { useState } from "react";
import api from "./apis/api";

export default function CreditorForm({ onAdd }) {
	const [form, setForm] = useState({
		name: "",
		amountDue: "",
		payDate: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await api.post("/creditors", {
			name: form.name,
			amountDue: Number(form.amountDue),
			payDate: Number(form.payDate),
		});

		onAdd(res.data);

		setForm({ name: "", amountDue: "", payDate: "" });
	};

	const handleChange = (e) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<form className='creditorform' onSubmit={handleSubmit}>
			<h2>Add Creditor</h2>
			<label>Name</label>
			<input type='text' name='name' onChange={handleChange} value={form.name} />
			<label>Amount Due</label>
			<input type='number' name='amountDue' onChange={handleChange} value={form.amountDue} />
			<label>Pay Date</label>
			<input type='number' name='payDate' onChange={handleChange} value={form.payDate} />
			<button type='submit'>Add Creditor</button>
		</form>
	);
}
