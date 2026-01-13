import React from "react";
import Creditor from "./Creditor";

export default function CreditorTable({ creditors }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Amount</th>
					<th>Due Date</th>
				</tr>
			</thead>
			<tbody>
				{creditors.map((creditor) => {
					return <Creditor key={creditor.id} name={creditor.name} payDate={creditor.payDate} amountDue={creditor.amountDue} />;
				})}
			</tbody>
		</table>
	);
}
