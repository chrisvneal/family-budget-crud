import React, { useState } from "react";

export default function App() {
	const creditor = {
		id: 1,
		name: "Household Bank",
		payDate: 15,
		amountDue: 30.0,
	};

	const [creditors, setCreditors] = useState([creditor]);

	return (
		<div>
			<h2>Creditors</h2>
		</div>
	);
}
