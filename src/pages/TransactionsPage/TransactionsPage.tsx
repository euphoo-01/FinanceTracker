import * as React from "react";
import TransactionsList from "./modules/TransactionsList/TransactionsList";

const TransactionsPage: React.FC = () => {
	return (
		<section>
			<h1 align="center">История транзакций</h1>
			<TransactionsList></TransactionsList>
		</section>
	);
};

export default TransactionsPage;
