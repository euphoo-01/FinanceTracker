import * as React from "react";
import type { Transaction } from "../../../AddTransactionPage";

const TransactionItem: React.FC<{ transaction: Transaction }> = ({
	transaction,
}) => {
	return (
		<div>
			<p>
				<b>{transaction.description}</b>
			</p>
			<hr></hr>
			<p>{transaction.category}</p>
			<p>
				{transaction.value} {transaction.currency}
			</p>
			<p>{transaction.date.toLocaleString("ru-RU")}</p>
			<p>
				<b>{transaction.type}</b>
			</p>
		</div>
	);
};

export default TransactionItem;
