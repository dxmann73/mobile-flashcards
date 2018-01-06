import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import FcButton from './shared/FcButton';
import {defaultStyles} from '../styles/default';
import {addDeck} from '../actions/index';

class AddDeck extends React.Component {
    addDeck = (title) => {
        this.props.dispatchAddDeck(title);
        this.props.navigation.navigate('AddCard', {title});
    };

    render() {
        return <View style={defaultStyles.mainView}>
            <Text>AddDeck</Text>
            <Text>Input of deck name here</Text>
            <FcButton onPress={() => this.addDeck('test')} buttonText={'Submit'} inverted={true} />
        </View>;
    };
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    dispatchAddDeck: (title) => dispatch(addDeck(title)),
} );

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
