import * as React from "react";
import { CURRENCIES } from "../store/types";
import { useBalance } from "../../../StatisticsPage";
import useForm from "../store/useForm";
import useTransactions from "../store/useTransactions";

import styles from "./addForm.module.css";

//TODO: Debounce на input'ы

const AddForm: React.FC = () => {
	const { getBalances } = useBalance();
	const { updateField, getForm } = useForm();
	const { addTransaction } = useTransactions();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const formData = getForm();
		if (formData) {
			addTransaction(formData);
			console.log(formData);
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} className={styles.addForm}>
			<h1 className={styles.formTitle}>Добавить транзакцию</h1>
			<div>
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
				<button>Создать транзакцию</button>
			</div>
		</form>
	);
};

export default AddForm;
