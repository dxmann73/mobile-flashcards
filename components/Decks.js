import React from 'react';
import {Text, View} from 'react-native';
import FcButton from './FcButton';
import {defaultStyles} from '../styles/default';

class Decks extends React.Component {
    toDeck = () => {
        this.props.navigation.navigate(
            'Deck',
            {deckId: 1}
        );
    };

    render() {
        return <View style={defaultStyles.mainView}>
            <Text>Decks View</Text>
            <FcButton onPress={this.toDeck} buttonText={'Show Deck'} inverted={true}/>
        </View>;
    }
}

export default Decks;
