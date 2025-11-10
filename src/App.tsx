import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
				<Route index element={<Navigate to="/transactions" replace />} />
				<Route
					path="/history"
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<TransactionsPage />
						</Suspense>
					}
				/>
				<Route
					path="/transactions"
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<AddTransactionsPage />
						</Suspense>
					}
				/>
				{/* <Route path="/statistics" element={<StatisticsPage />} /> */}
			</Route>
		</Routes>
	);
}

export default App;
