import React from "react";

export default function CreditorRow({ name, payDate, amountDue }) {
	return (
		<tr>
			<td>{name}</td>
			<td>${amountDue}</td>
			<td>{payDate}</td>
			<td>
				<button>Delete</button>
			</td>
		</tr>
	);
}
