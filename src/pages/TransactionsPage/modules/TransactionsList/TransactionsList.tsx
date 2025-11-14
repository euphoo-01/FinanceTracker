import * as React from "react";
import { useTransactions } from "../../../AddTransactionPage";
import TransactionItem from "./TransactionItem";
import styles from "./TransactionsList.module.css";

const TransactionsList: React.FC = () => {
	const { getFilteredTransactions } = useTransactions();
	const filteredTransactions = getFilteredTransactions();
	return (
		<section className={styles.transactionsContainer}>
			{!filteredTransactions.length && <p>История транзакций пуста</p>}
			{filteredTransactions.map((transaction) => (
				<TransactionItem
					key={transaction.id}
					transaction={transaction}
				></TransactionItem>
			))}
		</section>
	);
};

export default TransactionsList;
