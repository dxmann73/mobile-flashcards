import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput} from 'react-native';
import FcButton from './shared/FcButton';
import {defaultStyles} from '../styles/default';
import {addDeck} from '../actions/index';
import {appLightInk} from '../styles/colors';

class AddDeck extends React.Component {
    state = {text: ''};
    addDeck = (title) => {
        if (title.length > 0) {
            this.props.dispatchAddDeck(title);
            this.props.navigation.navigate('AddCard', {title});
        }
        this.setState({text: ''});
    };

    render() {
        return <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={65} style={defaultStyles.mainView}>
            <Text style={styles.heading}>What is the title</Text>
            <Text style={styles.heading}>of your new</Text>
            <Text style={styles.heading}>deck?</Text>
            <TextInput style={defaultStyles.inputField}
                       placeholder="Please add a deck title"
                       onChangeText={(text) => this.setState({text})}
                       value={this.state.text}
            />
            <FcButton onPress={() => this.addDeck(this.state.text.trim())} buttonText={'Submit'} inverted={true} />
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
