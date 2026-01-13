import React from "react";

export default function CreditorRow({ id, name, payDate, amountDue, removeCreditor }) {
	const handleDelete = () => {
		removeCreditor(id);
	};
	return (
		<tr>
			<td>{name}</td>
			<td>${amountDue}</td>
			<td>{payDate}</td>
			<td>
				<button onClick={handleDelete}>Delete</button>
			</td>
		</tr>
	);
}
