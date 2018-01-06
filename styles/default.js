import {StyleSheet} from 'react-native';
import {appDefaultPaper} from './colors';

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
});
