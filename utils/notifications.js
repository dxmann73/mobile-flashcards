import React from 'react';
import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';

const notification_key = 'mobile-flashcards.notification';
const notification_hour = 12;
const notification_minute = 0;
const notification_daily = 'day';

/** Remove notification key from storage and cancel all current notifications */
export const clearAppNotification = () => AsyncStorage.removeItem(notification_key)
    .then(Notifications.cancelAllScheduledNotificationsAsync);

/** set up a notification to trigger daily at 12pm */
export const setAppNotification = () => {
    AsyncStorage.getItem(notification_key)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) { // only add if not already there. normally, we delete the key before generating a new ons
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();
                            Notifications.scheduleLocalNotificationAsync(
                                {
                                    title: 'A quiz every day keeps the brain... in shape',
                                    body: 'Remember to take a quiz every day to stay in shape knowledge wise',
                                    android: {
                                        sound: true,
                                        priority: 'high',
                                        sticky: false,
                                        vibrate: true,
                                    }
                                },
                                {
                                    time: tomorrow(),
                                    repeat: notification_daily,
                                }
                            );

                            AsyncStorage.setItem(notification_key, JSON.stringify(true));
                        }
                    });
            }
        });
};

const tomorrow = () => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(notification_hour);
    tomorrow.setMinutes(notification_minute);
    return tomorrow;
};
