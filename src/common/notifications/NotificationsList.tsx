import * as React from "react";
import styles from "./NotificationsList.module.css";
import useNotification from "./useNotification";
import Notification from "./Notification";

const NotificationsList: React.FC = () => {
	const [visible, setVisible] = React.useState<boolean>(false);

	const { getNotificationStack } = useNotification();
	const notifications = getNotificationStack();

	React.useEffect(() => {
		if (notifications.length > 0) setVisible(true);
		else {
			const timer = setTimeout(() => setVisible(false), 300);
			return () => clearTimeout(timer);
		}
	}, [notifications]);

	return (
		<div className={`${styles.listContainer} ${visible ? styles.visible : ""}`}>
			{notifications.map((el) => (
				<Notification
					key={el.id}
					id={el.id}
					title={el.title}
					description={el.description}
					type={el.type}
					timeout={el.lifetime}
				/>
			))}
		</div>
	);
};

export default NotificationsList;
