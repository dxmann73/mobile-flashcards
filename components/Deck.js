import React from 'react';
import {Text, View} from 'react-native';
import FcButton from './shared/FcButton';
import {defaultStyles} from '../styles/default';

class Deck extends React.Component {
    static navigationOptions = ({navigation}) => {
        const title = JSON.stringify(navigation.state.params);
        return {
            title: `${title}`
        };
    };

    toAddCard = () => {
        this.props.navigation.navigate(
            'AddCard',
            {deckId: 1}
        );
    };
    toQuiz = () => {
        this.props.navigation.navigate(
            'Quiz',
            {deckId: 1}
        );
    };

    render() {
        return <View style={defaultStyles.mainView}>
            <Text>Deck View</Text>
            <FcButton onPress={this.toAddCard} buttonText={'Add Card'} inverted={true} />
            <FcButton onPress={this.toQuiz} buttonText={'Start quiz'} />
        </View>;
    }
}

export default Deck;
