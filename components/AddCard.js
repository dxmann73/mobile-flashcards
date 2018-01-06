import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, Text, TextInput, View} from 'react-native';
import {defaultStyles} from '../styles/default';
import {addCard} from '../actions/index';
import FcButton from './shared/FcButton';

const defaultState = {question: '', answer: ''};

class AddCard extends React.Component {
    static navigationOptions = ({navigation}) => ({title: `Add card to '${navigation.state.params.title}'`});

    state = defaultState;
    addCardToDeck = (question, answer) => {
        if (question.length > 0 && answer.length > 0) {
            this.props.dispatchAddCard(this.props.title, {question, answer});
        }
        this.setState(defaultState);
    };
    goBack = () => {
        this.setState(defaultState);
        this.props.navigation.navigate('Home');
    };

    render() {
        const {title} = this.props;
        return <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={65} style={defaultStyles.mainView}>
            <Text>AddCard for deck {title}</Text>
            <TextInput style={defaultStyles.inputField}
                       placeholder="Please add a question"
                       onChangeText={(question) => this.setState({question})}
                       value={this.state.question}
            />
            <TextInput style={defaultStyles.inputField}
                       placeholder="Please add the correct answer"
                       onChangeText={(answer) => this.setState({answer})}
                       value={this.state.answer}
            />
            <FcButton onPress={() => this.addCardToDeck(this.state.question.trim(), this.state.answer.trim())}
                      buttonText={'Add card'} />
            <FcButton onPress={this.goBack}
                      buttonText={'Done'} inverted={true} />
        </KeyboardAvoidingView>;
    }
}

const mapStateToProps = (state, {navigation}) => ({
    title: navigation.state.params.title,
} );

const mapDispatchToProps = (dispatch) => ({
    dispatchAddCard: (deckTitle, card) => dispatch(addCard(deckTitle, card)),
} );

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
