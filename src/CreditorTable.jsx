import React from "react";
import CreditorRow from "./CreditorRow";
import "./styles/table.scss";
import useCreditorsContext from "./hooks/use-creditors-context";

export default function CreditorTable() {
	const { creditors } = useCreditorsContext();
	const rows = creditors.map((creditor) => {
		return <CreditorRow key={creditor.id} id={creditor.id} name={creditor.name} payDate={creditor.payDate} amountDue={creditor.amountDue} />;
	});
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Amount</th>
					<th>Due Date</th>
					<th></th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}
