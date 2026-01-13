import React, { useState } from "react";
import Creditor from "./Creditor";

export default function App() {
	const creditor = {
		id: 1,
		name: "Household Bank",
		payDate: 15,
		amountDue: 30.0,
	};

	const creditor2 = {
		id: 2,
		name: "Capital One",
		payDate: 15,
		amountDue: 30.0,
	};

	const [creditors, setCreditors] = useState([creditor, creditor2]);

	return (
		<div>
			<h2>Creditors</h2>
			{creditors.map((creditor) => {
				return <Creditor key={creditor.id} name={creditor.name} />;
			})}
		</div>
	);
}
