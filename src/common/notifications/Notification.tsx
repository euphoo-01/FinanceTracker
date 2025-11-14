import * as React from "react";
import styles from "./Notification.module.css";
import { NotificationType } from "./types";
import useNotification from "./useNotification";

const Notification: React.FC<{
	title: string;
	description?: string;
	type: NotificationType;
	timeout: number;
	id: string;
}> = ({ id, title, description, type, timeout }) => {
	const { unmountNotification } = useNotification();
	const notificationRef = React.useRef<HTMLDivElement>(null);
	React.useEffect(() => {
		const el = notificationRef.current;
		if (!el) return;

		requestAnimationFrame(() => {
			el.classList.add(styles.reveal);
		});

		const closeTimer = setTimeout(() => {
			el.classList.add(styles.disappear);

			const unmountTimer = setTimeout(() => {
				unmountNotification(id);
			}, 200);

			return () => clearTimeout(unmountTimer);
		}, timeout * 1000);

		return () => clearTimeout(closeTimer);
	}, []);
	return (
		<div
			ref={notificationRef}
			className={`${styles.notificationContainer} ${styles[type]}`}
		>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default Notification;
