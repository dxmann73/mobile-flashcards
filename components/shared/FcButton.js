import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {appDefaultInk, appDefaultPaper} from '../../styles/colors';

const FcButton = ({onPress, buttonText, inverted}) => <View>
    <TouchableOpacity
        style={[styles.buttonShape, inverted ? styles.buttonColor : styles.buttonColorInverted]}
        onPress={onPress}>
        <Text style={[styles.buttonText, inverted ? styles.buttonTextColor : styles.buttonTextColorInverted]}>{buttonText}</Text>
    </TouchableOpacity>
</View>;

const styles = StyleSheet.create({
    buttonShape: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 30,
        height: 45,
        width: 300,
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center',
    },
    buttonColor: {
        backgroundColor: appDefaultInk,
        borderColor: appDefaultPaper,
    },
    buttonTextColor: {
        color: appDefaultPaper,
    },
    buttonColorInverted: {
        backgroundColor: appDefaultPaper,
        borderColor: appDefaultInk,
        borderWidth: 3,
    },
    buttonTextColorInverted: {
        color: appDefaultInk,
    },
});

export default FcButton;