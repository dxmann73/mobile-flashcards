import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {appDefaultButtonColor, appDefaultButtonTintColor} from '../styles/colors';

const FcButton = ({onPress, buttonText, inverted}) => <TouchableOpacity
    style={[styles.buttonShape, inverted ? styles.buttonColor : styles.buttonColorInverted]}
    onPress={onPress}>
    <Text style={[styles.buttonText, inverted ? styles.buttonTextColor : styles.buttonTextColorInverted]}>{buttonText}</Text>
</TouchableOpacity>;

const styles = StyleSheet.create({
    buttonShape: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center',
    },
    buttonColor: {
        backgroundColor: appDefaultButtonColor,
        borderColor: appDefaultButtonTintColor,
    },
    buttonTextColor: {
        color: appDefaultButtonTintColor,
    },
    buttonColorInverted: {
        backgroundColor: appDefaultButtonTintColor,
        borderColor: appDefaultButtonColor,
    },
    buttonTextColorInverted: {
        color: appDefaultButtonColor,
    },
});

export default FcButton;