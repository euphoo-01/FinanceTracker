import { useForm } from "../../../AddTransactionPage";
import { Balance } from "./types";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useBalanceForm = useForm<Balance>();
