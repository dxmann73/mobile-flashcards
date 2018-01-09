import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput} from 'react-native';
import FcButton from './shared/FcButton';
import {BIG_TEXT, defaultStyles} from '../styles/default';
import {appLightInk} from '../styles/colors';
import {addDeckToStorage} from '../utils/storage';
import {defaultKeyboardVerticalOffset} from '../utils/misc';

const defaultState = {text: ''};

class AddDeck extends React.Component {
    state = defaultState;
    addDeck = (title) => {
        // later: animate text field when empty on submit
        if (title.length > 0) {
            addDeckToStorage(this.props.dispatch, title)
                .then(() => this.props.navigation.navigate('AddCard', {title}));
        }
        this.setState(defaultState);
    };

    render() {
        return <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={defaultKeyboardVerticalOffset} style={defaultStyles.mainView}>
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
        fontSize: BIG_TEXT,
        fontWeight: 'bold',
        color: appLightInk,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(AddDeck);
