import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appDefaultInk, appDefaultPaper, appLightInk} from '../../styles/colors';

const FcDeck = ({title, numCards}) =>
    <View style={styles.fullWidthPanel}>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.deckSubtitle}>{numCards} Cards</Text>
    </View>;

const styles = StyleSheet.create({
    fullWidthPanel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appDefaultPaper,
        paddingTop: 30,
        paddingBottom: 30,
    },
    deckTitle: {
        fontSize: 28,
        color: appDefaultInk,
    },
    deckSubtitle: {
        fontSize: 24,
        color: appLightInk,
    },
});

export default FcDeck;