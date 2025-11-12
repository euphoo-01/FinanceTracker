import * as React from "react";
import { CURRENCIES } from "../store/types";
import { useBalance } from "../../../StatisticsPage";
import useForm from "../store/useForm";
import useTransactions from "../store/useTransactions";
import { useId } from "react";
import { type TransactionType } from "../../../AddTransactionPage";

import styles from "./addForm.module.css";

//TODO: Debounce на input'ы

const AddForm: React.FC = () => {
	const { getBalances } = useBalance();
	const { updateField, getForm } = useForm();
	const { addTransaction } = useTransactions();
	const id = useId();

	const handleSubmit = (e: React.FormEvent, type: TransactionType) => {
		e.preventDefault();
		updateField("id", id);
		updateField("date", new Date(Date.now()));
		updateField("type", type);
		const formData = getForm();
		if (formData) {
			addTransaction(formData);
			console.log(formData);
		}
	};

	return (
		<form onSubmit={(e) => e.preventDefault} className={styles.addForm}>
			<h1 className={styles.formTitle}>Добавить транзакцию</h1>
			<div className={styles.formContent}>
				<input
					placeholder="Название транзакции"
					onChange={(e) => updateField("description", e.target.value)}
				></input>
				<input
					placeholder="Сумма"
					onChange={(e) => updateField("value", Number(e.target.value))}
				></input>
				<select
					defaultValue=""
					onChange={(e) => updateField("currency", e.target.value)}
				>
					<option disabled value="">
						Выберите валюту
					</option>
					{Object.values(CURRENCIES).map((val, idx) => (
						<option key={idx} value={val}>
							{val}
						</option>
					))}
				</select>
				<select
					defaultValue=""
					onChange={(e) => updateField("fromBalance", e.target.value)}
				>
					<option disabled value="">
						Выберите счет
					</option>
					{Object.values(getBalances()).map((val, idx) => (
						<option key={idx} value={val.id}>
							{val.name}
						</option>
					))}
				</select>
				<div className={styles.submitButtonsContainer}>
					<button
						onClick={(e) => handleSubmit(e, "income")}
						className={styles.accept}
					>
						Поступление
					</button>
					<button
						onClick={(e) => handleSubmit(e, "outcome")}
						className={styles.decline}
					>
						Трата
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddForm;
