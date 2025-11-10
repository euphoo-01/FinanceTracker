import { create } from "zustand";
import type { Balance, BalanceState } from "./types";
import { devtools } from "zustand/middleware";

const useBalance = create<BalanceState>()(
	devtools((set, get) => ({
		_balances: [],
		addBalance: (balance: Balance) => {
			set((state) => ({ _balances: [...state._balances, balance] }));
		},
		delBalance: (id: string) => {
			set((state) => ({
				_balances: [...state._balances.filter((el) => el.id !== id)],
			}));
		},
		editBalance: (id: string, newBalance: Omit<Balance, "id">) => {
			set((state) => ({
				_balances: state._balances.map((balance) =>
					balance.id === id ? { ...balance, ...newBalance } : balance
				),
			}));
		},
		getBalances: () => {
			const { _balances: balances } = get();
			return balances;
		},
	}))
);

export default useBalance;
