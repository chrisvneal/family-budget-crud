import { useContext } from "react";
import CreditorsContext from "../contexts/CreditorsContext";

export default function useCreditorsContext() {
	return useContext(CreditorsContext);
}
