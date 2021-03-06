import React from "react";
import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const NOTIFICATION_KEY = "FlashCards:notifications";

export function getDailyReminderValue() {
  return {
    today: "👋 Don't forget to learn your Cards!"
  };
}

export function timeToString(time = Date.now()) {
  const date = new Date(time);
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  return todayUTC.toISOString().split("T")[0];
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: "Keep Improving!",
    body: "👋 Don't forget to learn your Cards!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export async function setLocalNotification() {
  // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (status === "granted") {
    Notifications.cancelAllScheduledNotificationsAsync();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(20);
    tomorrow.setMinutes(0);

    Notifications.scheduleLocalNotificationAsync(createNotification(), {
      time: tomorrow,
      repeat: "day"
    });

    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
  } else {
    throw new Error("Notification permission not granted");
  }
}

// export function setLocalNotification() {
//   console.log("getHere");
//   AsyncStorage.getItem(NOTIFICATION_KEY)
//     .then(JSON.parse)
//     .then(data => {
//       if (data === null) {
//         Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
//           if (status === "granted") {
//             Notifications.cancelAllScheduledNotificationsAsync();

//             let tomorrow = new Date();
//             tomorrow.setDate(tomorrow.getDate() + 1);
//             tomorrow.setHours(20);
//             tomorrow.setMinutes(0);

//             Notifications.scheduleLocalNotificationAsync(createNotification(), {
//               time: tomorrow,
//               repeat: "day"
//             });

//             AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
//           }
//         });
//       }
//     });
// }
