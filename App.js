import React from 'react';
import {Text, View} from 'react-native';
import FcStatusBar from './components/FcStatusBar';
import {defaultStyles} from './styles/default';
import {appBackgroundColor} from './styles/colors';

export default class App extends React.Component {
    render() {
        return (
            <View style={defaultStyles.container}>
                <FcStatusBar backgroundColor={appBackgroundColor} barStyle="light-content" />
                <Text>Yeah Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}
