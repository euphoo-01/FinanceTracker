import type { Currency } from "../../../AddTransactionPage";

export type Balance = {
	id?: string;
	name: string;
	value: number;
	currency: Currency;
};

export interface BalanceState {
	_balances: Balance[];
	addBalance: (balance: Balance) => void;
	delBalance: (id: string) => void;
	editBalance: (id: string, newBalance: Omit<Balance, "id">) => void;
	getBalances: () => Balance[];
	changeBalanceMoney: (id: string, value: number) => void;
}
