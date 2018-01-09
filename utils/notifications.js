import React from 'react';
import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';

const NOTIFICATION_KEY = 'mobile-flashcards.notification';
const NOTIFICATION_OFFSET_DAYS = 1;
const NOTIFICATION_HOUR = 12;
const NOTIFICATION_MINUTE = 0;
const NOTIFICATION_DAILY = 'day';

/** Remove notification key from storage and cancel all current notifications */
export const clearAppNotification = () => AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);

/** set up a notification to trigger daily at 12pm */
export const setAppNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) { // only add if not already there. normally, we delete the key before generating a new one
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();
                            Notifications.scheduleLocalNotificationAsync(
                                {
                                    title: 'A quiz every day keeps the brain... in shape',
                                    body: 'Remember to take a quiz every day to stay in shape knowledge wise',
                                    ios: {
                                        sound: true,
                                    },
                                    android: {
                                        sound: true,
                                        priority: 'high',
                                        sticky: true,
                                        vibrate: true,
                                    }
                                },
                                {
                                    time: tomorrow(),
                                    repeat: NOTIFICATION_DAILY,
                                }
                            );

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    });
            }
        });
};

const tomorrow = () => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + NOTIFICATION_OFFSET_DAYS);
    tomorrow.setHours(NOTIFICATION_HOUR);
    tomorrow.setMinutes(NOTIFICATION_MINUTE);
    // for testing: tomorrow.setSeconds(tomorrow.getSeconds() + 10);
    return tomorrow;
};
