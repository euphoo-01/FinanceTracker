import * as React from "react";
import { useTransactions } from "../../../AddTransactionPage";
import TransactionItem from "./TransactionItem";

const TransactionsList: React.FC = () => {
	const { getFilteredTransactions } = useTransactions();
	return (
		<section>
			{getFilteredTransactions().map((transaction) => (
				<TransactionItem transaction={transaction}></TransactionItem>
			))}
		</section>
	);
};

export default TransactionsList;
