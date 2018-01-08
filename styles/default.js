import {StyleSheet} from 'react-native';
import {appDarkInk, appDefaultPaper, appLightInk} from './colors';

// TODO styles for landscape orientation or ScrollViews?
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
