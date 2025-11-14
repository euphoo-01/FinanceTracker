import { create } from "zustand";
import { devtools } from "zustand/middleware";

type UseFormState<T> = {
	formData: Partial<T>;
	updateField: <K extends keyof T>(field: K, value: T[K]) => void;
	getForm: () => Partial<T>;
	resetForm: () => void;
};

const useForm = <T>() =>
	create<UseFormState<T>>()(
		devtools((set, get) => ({
			formData: {},
			updateField: (field, value) => {
				set((state) => ({
					formData: { ...state.formData, [field]: value },
				}));
			},
			getForm: () => get().formData,
			resetForm: () => set({ formData: {} }),
		}))
	);

export default useForm;
