import {StyleSheet} from 'react-native';
import {appDarkInk, appDefaultPaper, appLightInk} from './colors';

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
        borderRadius: 5,
        borderWidth: 3,
        borderColor: appLightInk,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
