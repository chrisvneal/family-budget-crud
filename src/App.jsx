import React, { useContext, useEffect } from "react";
import CreditorTable from "./CreditorTable";
import CreditorForm from "./CreditorForm";
import CreditorsContext from "./contexts/CreditorsContext";

import "./styles/App.scss";

export default function App() {
	const { creditors, fetchCreditors, handleDelete } = useContext(CreditorsContext);
	useEffect(() => {
		fetchCreditors();
	}, []);

	return (
		<div className='App'>
			<CreditorForm />

			<h2>Creditors</h2>
			<CreditorTable creditors={creditors} onDelete={handleDelete} />
		</div>
	);
}
