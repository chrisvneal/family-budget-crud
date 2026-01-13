import React, { useState } from "react";
import CreditorTable from "./CreditorTable";

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

	const [creditors, setCreditors] = useState(creditorList);

	return (
		<div>
			<h2>Creditors</h2>

			<CreditorTable creditors={creditors} />
		</div>
	);
}
