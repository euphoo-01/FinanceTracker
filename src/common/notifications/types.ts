export type NotificationType = "info" | "error" | "warning";

export type Notification = {
	id: string;
	title: string;
	description?: string;
	type: NotificationType;
	lifetime: number;
};

export type NotificationsState = {
	_notifications: Notification[];
	addNotification: (
		title: string,
		description: string,
		type: NotificationType,
		lifetime: number
	) => void;
	getNotificationStack: () => Notification[];
	unmountNotification: (id: string) => void;
};

/*

Как должно выглядеть взаимодействие с Notification:
- На странице использован хук useNotification
- useNotification вернул JSX элемент NotificationList
- Я разместил этот лист куда мне нужно, он не отображается пока там не появятся Notification
- Если Notification пришло, то NotificationList отображается


		addNotification: (title, description, type, lifetime = 8) => {
			set((state) => ({
				_notifications: [
					...state._notifications,
					{ title, description, type, lifetime },
				],
			}));
		},
		getNotificationStack: () => {
			const { _notifications: notificationArray } = get();
			return notificationArray;
		},
*/
