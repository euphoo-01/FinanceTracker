import * as React from "react";
import { CURRENCIES, Transaction } from "../store/types";
import { useBalance } from "../../../StatisticsPage";
import useTransactionForm from "../store/transactionsFormStore";
import useTransactions from "../store/useTransactions";
import { nanoid } from "nanoid";
import { type TransactionType } from "../../../AddTransactionPage";

import styles from "./addForm.module.css";

//TODO: Валидация полей формы
//TODO: Логика взаимодействия со счетом

const AddForm: React.FC = () => {
	const { getBalances } = useBalance();

	const { updateField, getForm } = useTransactionForm();

	const { addTransaction } = useTransactions();
	const id = nanoid();

	const handleSubmit = (e: React.FormEvent, type: TransactionType) => {
		e.preventDefault();
		updateField("id", id);
		updateField("date", new Date(Date.now()));
		updateField("type", type);
		const formData = getForm() as Transaction;
		if (formData) {
			addTransaction(formData);
		}
	};

	React.useEffect(() => {
		const formData = getForm();
		console.log("Form state updated:", formData);
	}, [getForm]);

	return (
		<form className={styles.addForm}>
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
