import { create } from "zustand";
import type { Balance, BalanceState } from "./types";
import { devtools, persist } from "zustand/middleware";

const useBalance = create<BalanceState>()(
	devtools(
		persist(
			(set, get) => ({
				_balances: [] as Balance[],
				addBalance: (balance: Balance) => {
					set((state) => ({ _balances: [...state._balances, balance] }));
				},
				delBalance: (id: string) => {
					set((state) => ({
						_balances: [...state._balances.filter((el) => el.id !== id)],
					}));
				},
				editBalance: (id: string, newBalance: Omit<Partial<Balance>, "id">) => {
					set((state) => ({
						_balances: state._balances.map((balance) =>
							balance.id === id ? { ...balance, ...newBalance } : balance
						),
					}));
				},
				changeBalanceMoney: (id: string, value: number) => {
					set((state) => ({
						_balances: state._balances.map((balance) =>
							balance.id === id
								? { ...balance, value: balance.value + value }
								: balance
						),
					}));
				},
				getBalances: () => {
					const { _balances: balances } = get();
					return balances;
				},
			}),
			{ name: "balances-storage" }
		)
	)
);

export default useBalance;
