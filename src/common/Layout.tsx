import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
	return (
		<>
			<header>
				<h1>FinanceTracker</h1>
				<menu>
					<ul>
						<li>Транзакции</li>
						<li>Добавить</li>
						<li>Статистика</li>
					</ul>
				</menu>
			</header>

			<main>
				<Suspense fallback={<p>Загрузка...</p>}>
					<Outlet></Outlet>
				</Suspense>
			</main>

			<footer>
				<h3>FinanceTracker</h3>
				<p>Твой личный финансовый помощник. All rights reserved</p>
			</footer>
		</>
	);
};

export default Layout;
