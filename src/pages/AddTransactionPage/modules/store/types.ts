type TransactionType = "income" | "outcome";

export const CURRENCIES = {
	BYN: "BYN",
	USD: "$",
};

export type Currency = (typeof CURRENCIES)[keyof typeof CURRENCIES];

export type Transaction = {
	id?: string;
	value: number;
	type: TransactionType;
	description: string;
	category?: string;
	date: Date;
	currency: Currency;
	fromBalance: string;
	toBalance: string;
};

export type Filter = "all" | TransactionType;

export interface TransactionsState {
	_transactions: Transaction[] | [];
	_filter: Filter;
	addTransaction: (transaction: Transaction) => void;
	delTransaction: (id: string) => void;
	editTransaction: (
		id: string,
		newTransaction: Omit<Transaction, "id">
	) => void;
	setFilter: (filter: Filter) => void;
	getFilteredTransactions: () => Transaction[];
}
