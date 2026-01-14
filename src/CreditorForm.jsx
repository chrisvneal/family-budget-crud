import React, { useState } from "react";
import api from "./apis/api";
import "./styles/form.scss";
import useCreditorsContext from "./hooks/use-creditors-context";

export default function CreditorForm() {
	const { updateCreditors } = useCreditorsContext();
	const [form, setForm] = useState({
		name: "",
		amountDue: "",
		payDate: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Post new creditor to creditor API (mock server)
		const res = await api.post("/creditors", {
			name: form.name,
			amountDue: Number(form.amountDue),
			payDate: Number(form.payDate),
		});

		// update creditor state in App.jsx
		updateCreditors(res.data);

		setForm({ name: "", amountDue: "", payDate: "" });
	};

	const handleChange = (e) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<form className='creditor-form' onSubmit={handleSubmit}>
			<h2>Add Creditor</h2>
			<div>
				<label>Name</label>
				<input type='text' name='name' onChange={handleChange} value={form.name} />
			</div>

			<div>
				<label>Amount Due</label>
				<input type='number' name='amountDue' onChange={handleChange} value={form.amountDue} />
			</div>

			<div>
				<label>Pay Date</label>
				<input type='number' name='payDate' onChange={handleChange} value={form.payDate} />
			</div>

			<button type='submit'>Add Creditor</button>
		</form>
	);
}
