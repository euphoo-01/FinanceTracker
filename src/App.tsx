import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PAGE_ENDPOINTS } from "./navigation/types.ts";
import "./App.css";

import Layout from "./common/Layout.tsx";
const TransactionsPage = lazy(
	() => import("./pages/TransactionsPage/TransactionsPage.tsx")
);
const AddTransactionsPage = lazy(
	() => import("./pages/AddTransactionPage/AddTransactionPage.tsx")
);
// const StatisticsPage = lazy(
// 	() => import("./pages/StatisticsPage/StatisticsPage.tsx")
// );

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={<Navigate to={PAGE_ENDPOINTS.transactions} replace />}
				/>
				<Route
					path={PAGE_ENDPOINTS.history}
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<TransactionsPage />
						</Suspense>
					}
				/>
				<Route
					path={PAGE_ENDPOINTS.transactions}
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<AddTransactionsPage />
						</Suspense>
					}
				/>
				<Route path={PAGE_ENDPOINTS.statistics} element={<></>} />
			</Route>
		</Routes>
	);
}

export default App;
