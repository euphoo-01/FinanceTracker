import React, { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { PAGE_ENDPOINTS } from "../modules/navigation/types";

import HistoryIcon from "../assets/history.svg?react";
import ChartIcon from "../assets/chart.svg?react";
import AddIcon from "../assets/money-add.svg?react";

const Layout: React.FC = () => {
	const navigate = useNavigate();
	return (
		<>
			<header>
				<h1>FinanceTracker</h1>
				<menu className={styles.menu}>
					<ul>
						<li onClick={() => navigate(PAGE_ENDPOINTS.history)}>
							<HistoryIcon className={styles.historyIcon} />
						</li>
						<li onClick={() => navigate(PAGE_ENDPOINTS.transactions)}>
							<AddIcon className={styles.icon} />
						</li>
						<li onClick={() => navigate(PAGE_ENDPOINTS.statistics)}>
							<ChartIcon className={styles.icon} />
						</li>
					</ul>
				</menu>
			</header>

			<main>
				<Suspense fallback={<p>Загрузка...</p>}>
					<Outlet></Outlet>
				</Suspense>
			</main>

			<footer className={styles.footerContainer}>
				<h3>FinanceTracker</h3>
				<p>Твой личный финансовый помощник. All rights reserved.</p>
			</footer>
		</>
	);
};

export default Layout;
