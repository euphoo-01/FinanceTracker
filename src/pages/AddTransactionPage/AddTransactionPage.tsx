import * as React from "react";
import AddForm from "./modules/addForm/addForm";
import { NotificationsList } from "../../common/notifications";

const AddTransactionPage: React.FC = () => {
	return (
		<>
			<NotificationsList></NotificationsList>
			<AddForm></AddForm>
		</>
	);
};

export default AddTransactionPage;
