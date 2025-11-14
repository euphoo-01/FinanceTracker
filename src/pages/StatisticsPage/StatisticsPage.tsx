import * as React from "react";
import styles from "./StatisticsPage.module.css";
import BalanceList from "./modules/BalanceList/BalanceList";
import AddBalanceForm from "./modules/AddBalanceForm/AddBalanceForm";

//TODO: Графики

const Statistics: React.FC = () => {
	const [isModal, setIsModal] = React.useState<boolean>(false);
	return (
		<>
			<h1 style={{ textAlign: "center" }}>Статистика</h1>
			<AddBalanceForm isModal={isModal} setIsModal={setIsModal} />
			<article className={styles.dashboardContainer}>
				<BalanceList
					className={styles.dashboardBalances}
					handleModal={setIsModal}
				/>
			</article>
		</>
	);
};

export default Statistics;
