import React from 'react';
import {Text, View} from 'react-native';
import {defaultStyles} from '../styles/default';

class Quiz extends React.Component {
    render() {
        return <View style={defaultStyles.mainView}>
            <Text>Quiz</Text>
        </View>;
    }
}

export default Quiz;
