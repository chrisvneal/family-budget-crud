import React from "react";

export default function Creditor({ name, payDate, amountDue }) {
	return (
		<tr>
			<td>{name}</td>
			<td>${amountDue}</td>
			<td>{payDate}</td>
		</tr>
	);
}
