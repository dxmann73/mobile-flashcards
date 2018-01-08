import React from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, Text, TextInput} from 'react-native';
import {defaultStyles} from '../styles/default';
import FcButton from './shared/FcButton';
import {defaultKeyboardVerticalOffset} from '../utils/misc';
import {addCardToStorage} from '../utils/storage';

const defaultState = {question: '', answer: ''};

class AddCard extends React.Component {
    static navigationOptions = ({navigation}) => ({title: `Add card to '${navigation.state.params.title}'`});

    state = defaultState;
    addCardToDeck = (question, answer) => {
        if (question.length > 0 && answer.length > 0) {
            addCardToStorage(this.props.dispatch, this.props.title, {question, answer});
        }
        this.setState(defaultState);
    };
    goBack = () => {
        this.setState(defaultState);
        this.props.navigation.navigate('Home');
    };

    render() {
        const {title} = this.props;
        return <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={defaultKeyboardVerticalOffset} style={defaultStyles.mainView}>
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

export default connect(mapStateToProps)(AddCard);
