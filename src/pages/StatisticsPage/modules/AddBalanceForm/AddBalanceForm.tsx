import * as React from "react";
import styles from "./AddBalanceForm.module.css";
import { useBalanceForm } from "../store/balanceFormStore";
import type { Balance } from "../store/types";
import useBalance from "../store/useBalance";
import { CURRENCIES } from "../../../AddTransactionPage";
import { nanoid } from "nanoid";

const AddBalanceForm: React.FC<{
	isModal: boolean | undefined;
	setIsModal: (val: boolean) => void;
}> = ({ isModal, setIsModal }) => {
	const { updateField, getForm, resetForm } = useBalanceForm();
	const { getBalances, addBalance } = useBalance();
	const currentBalances = getBalances();

	const id = nanoid();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		updateField("id", id);
		const formData = getForm();
		if (formData)
			if (!currentBalances.find((balance) => balance.name === formData.name)) {
				addBalance(formData as Balance);
				resetForm();
				setIsModal(!isModal);
			} else {
				console.error("Такой баланс уже существует");
			}
	};
	return (
		<div
			className={`${styles.formBackdrop} ${isModal ? styles.active : ""}`}
			onClick={(e) => {
				e.stopPropagation();
				setIsModal(!isModal);
				resetForm();
			}}
		>
			<form
				className={`${styles.formContainer} ${isModal ? styles.active : ""}`}
				onSubmit={(e) => handleSubmit(e)}
				onClick={(e) => e.stopPropagation()}
			>
				<h3>Добавить счёт</h3>
				<input
					placeholder="Имя счёта"
					onChange={(e) => updateField("name", e.target.value)}
				/>
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
				<input
					placeholder="Стартовый баланс"
					onChange={(e) => updateField("value", Number(e.target.value))}
				/>
				<button>Добавить счёт</button>
			</form>
		</div>
	);
};

export default AddBalanceForm;
