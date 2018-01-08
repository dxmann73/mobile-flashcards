import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {View} from 'react-native';
import FcStatusBar from './components/shared/FcStatusBar';
import {defaultStyles} from './styles/default';
import {appHighlightInk} from './styles/colors';
import Navigation from './components/Navigation';
import {setAppNotification} from './utils/notifications';

const store = createStore(reducer);

class App extends React.Component {

    /** on app start, set up a daily notification initially, if not already there */
    componentDidMount() {
        setAppNotification();
    }

    render() {
        return (
            <Provider store={store}>
                <View style={defaultStyles.container}>
                    <FcStatusBar backgroundColor={appHighlightInk} barStyle="light-content" />
                    <Navigation />
                </View>
            </Provider>
        );
    }
}

export default App;
