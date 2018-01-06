import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import FcButton from './shared/FcButton';
import {defaultStyles} from '../styles/default';

class AddDeck extends React.Component {
    toAddCard = () => {
        this.props.navigation.navigate(
            'AddCard',
            {deckId: undefined}
        );
    };

    render() {
        return <View style={defaultStyles.mainView}>
            <Text>AddDeck</Text>
            <Text>Input of deck name here</Text>
            <FcButton onPress={this.toAddCard} buttonText={'Submit'} inverted={true} />
        </View>;
    };
}

const mapStateToProps = (state, props) => ({
    key: props.key,
} );

export default connect(mapStateToProps)(AddDeck);
