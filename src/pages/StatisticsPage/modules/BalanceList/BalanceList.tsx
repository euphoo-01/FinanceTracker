import React from "react";
import { useBalance } from "../../../StatisticsPage";
import BalanceItem from "./BalanceItem";
import AddIcon from "../../../../assets/add.svg?react";
import styles from "./BalanceList.module.css";

const BalanceList: React.FC<{
	className?: string;
	handleModal: (val: boolean) => void;
}> = ({ className, handleModal }) => {
	const { getBalances } = useBalance();
	const currentBalances = getBalances();
	return (
		<div className={className}>
			{!currentBalances.length && <p>Счета не обнаружены</p>}
			{currentBalances.map((balance) => (
				<BalanceItem key={balance.id} balance={balance} />
			))}
			<AddIcon className={styles.icon} onClick={() => handleModal(true)} />
		</div>
	);
};

export default BalanceList;
