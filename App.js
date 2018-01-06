import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {View} from 'react-native';
import FcStatusBar from './components/shared/FcStatusBar';
import {defaultStyles} from './styles/default';
import {appNavigationBackgroundColor} from './styles/colors';
import Navigation from './components/Navigation';

const store = createStore(reducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={defaultStyles.container}>
                    <FcStatusBar backgroundColor={appNavigationBackgroundColor} barStyle="light-content" />
                    <Navigation />
                </View>
            </Provider>
        );
    }
}

export default App;
