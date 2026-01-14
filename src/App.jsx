import React, { useEffect } from "react";
import CreditorTable from "./CreditorTable";
import CreditorForm from "./CreditorForm";
import useCreditorsContext from "./hooks/use-creditors-context";

import "./styles/App.scss";

export default function App() {
	const { fetchCreditors } = useCreditorsContext();
	useEffect(() => {
		fetchCreditors();
	}, []);

	return (
		<div className='App'>
			<CreditorForm />

			<h2>Creditors</h2>
			<CreditorTable />
		</div>
	);
}
