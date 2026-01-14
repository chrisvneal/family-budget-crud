import React, { useContext } from "react";
import CreditorsContext from "./contexts/CreditorsContext";

export default function CreditorRow({ id, name, payDate, amountDue }) {
	const { handleDelete } = useContext(CreditorsContext);

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
