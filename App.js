import React from 'react';
import {View} from 'react-native';
import FcStatusBar from './components/FcStatusBar';
import {defaultStyles} from './styles/default';
import {appBackgroundColor} from './styles/colors';
import Navigation from './components/Navigation';

export default class App extends React.Component {
    render() {
        return (
            <View style={defaultStyles.container}>
                <FcStatusBar backgroundColor={appBackgroundColor} barStyle="light-content" />
                <Navigation />
            </View>
        );
    }
}
