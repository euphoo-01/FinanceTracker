import useForm from "./useForm";
import { Transaction } from "./types";

// eslint-disable-next-line react-hooks/rules-of-hooks
const useTransactionForm = useForm<Transaction>();
export default useTransactionForm;
