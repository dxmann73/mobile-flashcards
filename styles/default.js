import {StyleSheet} from 'react-native';
import {appDarkInk, appDefaultPaper, appLightInk} from './colors';

export const BIG_TEXT = 30;
export const MED_TEXT = 28;
export const SML_TEXT = 16;

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appDefaultPaper,
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appDefaultPaper,
    },
    inputField: {
        paddingLeft: 10,
        paddingRight: 10,
        color: appDarkInk,
        marginTop: 20,
        height: 50,
        width: 300,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: appLightInk,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
