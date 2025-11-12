import * as React from "react";
import type { Transaction } from "../../../AddTransactionPage";
import styles from "./TransactionItem.module.css";

const TransactionItem: React.FC<{ transaction: Transaction }> = ({
	transaction,
}) => {
	return (
		<div className={styles.transaction}>
			<p>
				<b>{transaction.description}</b>
			</p>
			<hr></hr>
			<p>{transaction.category}</p>
			<p>
				{transaction.value} {transaction.currency}
			</p>
			<p>{transaction.date.toLocaleString()}</p>
			<p>
				<b>{transaction.type}</b>
			</p>
		</div>
	);
};

export default TransactionItem;
