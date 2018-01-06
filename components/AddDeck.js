import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput} from 'react-native';
import FcButton from './shared/FcButton';
import {defaultStyles} from '../styles/default';
import {addDeck} from '../actions/index';
import {appLightInk} from '../styles/colors';

const defaultState = {text: ''};

class AddDeck extends React.Component {
    state = defaultState;
    addDeck = (title) => {
        // TODO animate text field when empty on submit
        if (title.length > 0) {
            this.props.dispatchAddDeck(title);
            this.props.navigation.navigate('AddCard', {title});
        }
        this.setState(defaultState);
    };

    render() {
        // keyboardVerticalOffset as per https://github.com/react-navigation/react-navigation/issues/721
        return <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={65} style={defaultStyles.mainView}>
            <Text style={styles.heading}>What is the title</Text>
            <Text style={styles.heading}>of your new</Text>
            <Text style={styles.heading}>deck?</Text>
            <TextInput style={defaultStyles.inputField}
                       placeholder="Please add a deck title"
                       onChangeText={(text) => this.setState({text})}
                       value={this.state.text}
            />
            <FcButton onPress={() => this.addDeck(this.state.text.trim())} buttonText={'Submit'} />
        </KeyboardAvoidingView>;
    };
}

const styles = StyleSheet.create({
    heading: {
        height: 35,
        fontSize: 30,
        fontWeight: 'bold',
        color: appLightInk,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    dispatchAddDeck: (title) => dispatch(addDeck(title)),
} );

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
