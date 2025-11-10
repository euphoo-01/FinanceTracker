import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Transaction } from "./types";

type useFormState = {
	formData: Partial<Transaction>;
	updateField: <K extends keyof Transaction>(
		field: K,
		value: Transaction[K]
	) => void;
	getForm: () => Transaction | undefined;
	resetForm: () => void;
};

const useForm = create<useFormState>()(
	devtools((set, get) => ({
		formData: undefined,
		updateField: (field, value) =>
			set((state) => ({ formData: { ...state.formData, [field]: value } })),
		getForm: () => {
			const { formData } = get();
			if (formData) {
				return formData;
			}
			return undefined;
		},

		resetForm: () => {},
	}))
);

export default useForm;
