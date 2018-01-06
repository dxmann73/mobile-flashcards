import React from 'react';
import {View} from 'react-native';
import FcStatusBar from './components/shared/FcStatusBar';
import {defaultStyles} from './styles/default';
import {appNavigationBackgroundColor} from './styles/colors';
import Navigation from './components/Navigation';

export default class App extends React.Component {
    render() {
        return (
            <View style={defaultStyles.container}>
                <FcStatusBar backgroundColor={appNavigationBackgroundColor} barStyle="light-content" />
                <Navigation />
            </View>
        );
    }
}
