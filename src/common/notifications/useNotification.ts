import { create } from "zustand";
import type { NotificationsState, Notification } from "./types";
import { nanoid } from "nanoid";

const useNotification = create<NotificationsState>()((set, get) => ({
	_notifications: [] as Notification[],
	addNotification: (title, description, type, lifetime = 3) => {
		const id = nanoid();
		set((state) => ({
			_notifications: [
				{ id, title, description, type, lifetime },
				...state._notifications,
			],
		}));
	},
	unmountNotification: (id) => {
		set((state) => ({
			_notifications: state._notifications.filter(
				(notification) => notification.id !== id
			),
		}));
	},
	getNotificationStack: () => {
		const { _notifications: notificationArray } = get();
		return notificationArray;
	},
}));

export default useNotification;
