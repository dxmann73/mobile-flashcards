import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {appDefaultPaper, appHighlightInk} from '../../styles/colors';

const FcButton = ({
                      onPress, buttonText, inverted,
                      buttonColorStyle = styles.buttonColor,
                      buttonTextColorStyle = styles.buttonTextColor,
                      buttonColorInvertedStyle = styles.buttonColorInverted,
                      buttonTextColorInvertedStyle = styles.buttonTextColorInverted,
                  }) => <View>
    <TouchableOpacity
        style={[styles.buttonShape, inverted ? buttonColorInvertedStyle : buttonColorStyle]}
        onPress={onPress}>
        <Text style={[styles.buttonText, inverted ? buttonTextColorInvertedStyle : buttonTextColorStyle]}>{buttonText}</Text>
    </TouchableOpacity>
</View>;

const styles = StyleSheet.create({
    buttonShape: {
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 30,
        height: 60,
        width: 300,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center',
    },
    buttonColor: {
        backgroundColor: appHighlightInk,
        borderColor: appDefaultPaper,
    },
    buttonTextColor: {
        color: appDefaultPaper,
    },
    buttonColorInverted: {
        backgroundColor: appDefaultPaper,
        borderColor: appHighlightInk,
        borderWidth: 4,
    },
    buttonTextColorInverted: {
        color: appHighlightInk,
    },
});

export default FcButton;