import { create } from "zustand";
import type { TransactionsState, Transaction, Filter } from "./types";
import { devtools } from "zustand/middleware";

const useTransactions = create<TransactionsState>()(
	devtools((set, get) => ({
		_transactions: [],
		_filter: "all",
		addTransaction: (transaction: Transaction) =>
			set((state) => ({
				_transactions: [...state._transactions, transaction],
			})),
		delTransaction: (id: string) =>
			set((state) => ({
				_transactions: [...state._transactions.filter((el) => el.id !== id)],
			})),
		editTransaction: (id: string, newTransaction: Omit<Transaction, "id">) => {
			set((state) => ({
				_transactions: state._transactions.map((transaction) =>
					transaction.id === id
						? { ...transaction, ...newTransaction }
						: transaction
				),
			}));
		},
		setFilter: (filter: Filter) => set(() => ({ _filter: filter })),
		getFilteredTransactions: () => {
			const { _filter: filter, _transactions: transactions } = get();
			transactions.filter((el) => el.type === filter);
			return transactions;
		},
	}))
);

export default useTransactions;
