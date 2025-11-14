import * as React from "react";
import type { Balance } from "../store/types";
import styles from "./BalanceItem.module.css";

const BalanceItem: React.FC<{ balance: Balance }> = ({ balance }) => {
	return (
		<div className={styles.balanceContainer}>
			<p>
				<b>{balance.name}</b>
			</p>
			<p>
				{balance.value} {balance.currency}
			</p>
		</div>
	);
};

export default BalanceItem;
