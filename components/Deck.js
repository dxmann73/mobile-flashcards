import React from 'react';
import {Text, View} from 'react-native';
import FcButton from './FcButton';
import {defaultStyles} from '../styles/default';

class Deck extends React.Component {
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
        return <View style={defaultStyles.container}>
            <Text>Deck View</Text>
            <FcButton onPress={this.toAddCard} buttonText={'Add card to Deck'} inverted={true} />
            <FcButton onPress={this.toQuiz} buttonText={'Start quiz'} />
        </View>;
    }
}

export default Deck;
