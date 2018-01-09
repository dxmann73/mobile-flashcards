import React from 'react';
import {StyleSheet} from 'react-native';
import {appDefaultPaper, appGreen, appRed, appWhite} from '../styles/colors';
import {BIG_TEXT, MED_TEXT, SML_TEXT} from '../styles/default';

export const styles = StyleSheet.create({
    textView: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appDefaultPaper,
    },
    mediumText: {
        fontSize: MED_TEXT,
        marginBottom: 10,
    },
    bigText: {
        fontSize: BIG_TEXT,
        marginBottom: 20,
    },
    score: {
        fontSize: SML_TEXT,
        marginBottom: 10,
    },
    frontside: {
        fontSize: SML_TEXT,
        fontWeight: 'bold',
        color: appGreen,
    },
    backside: {
        fontSize: SML_TEXT,
        fontWeight: 'bold',
        color: appRed,
    },
    whiteOnGreen: {
        backgroundColor: appGreen,
        borderColor: appWhite,
    },
    buttonTextWhite: {
        color: appWhite,
    },
    whiteOnRed: {
        backgroundColor: appRed,
        borderColor: appWhite,
        borderWidth: 3,
    },
});
