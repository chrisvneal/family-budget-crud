import React, { useState } from "react";
import Creditor from "./Creditor";

export default function App() {
	const creditor = {
		id: 1,
		name: "Household Bank",
		payDate: 15,
		amountDue: 30.0,
	};

	const [creditors, setCreditors] = useState([creditor]);

	const renderedCreditors = creditors.map((creditor) => {
		return <Creditor name={creditor.name} />;
	});

	return (
		<div>
			<h2>Creditors</h2>
			{renderedCreditors}
		</div>
	);
}
