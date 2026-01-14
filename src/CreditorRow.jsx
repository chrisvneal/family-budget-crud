import React from "react";
import useCreditorsContext from "./hooks/use-creditors-context";

export default function CreditorRow({ id, name, payDate, amountDue }) {
	const { handleDelete } = useCreditorsContext();

	return (
		<tr>
			<td>{name}</td>
			<td>${amountDue}</td>
			<td>{payDate}</td>
			<td>
				<button onClick={() => handleDelete(id)}>Delete</button>
			</td>
		</tr>
	);
}
