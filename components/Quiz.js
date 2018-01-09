import React from 'react';
import {connect} from 'react-redux';
import {Text, TouchableOpacity, View} from 'react-native';
import {defaultStyles} from '../styles/default';
import FcButton from './shared/FcButton';
import {clearAppNotification, setAppNotification} from '../utils/notifications';
import {styles} from './QuizStyles';

const defaultState = {card: 0, score: 0, showFrontSide: true};

class Quiz extends React.Component {
    state = defaultState;
    flip = () => {
        this.setState((prev) => ({showFrontSide: !prev.showFrontSide}));
    };
    passed = () => {
        this.setState((prev) => ({card: prev.card + 1, score: prev.score + 1, showFrontSide: true}));
    };
    failed = () => {
        this.setState((prev) => ({card: prev.card + 1, showFrontSide: true}));
    };
    goToAddCards = (title) => {
        this.props.navigation.navigate('AddCard', {title});
    };
    restart = () => {
        this.moveNotificationOneDayForward();
        this.setState(defaultState);
    };
    goBack = () => {
        this.moveNotificationOneDayForward();
        this.props.navigation.navigate('Deck', {title: this.props.title});
    };
    goHome = () => {
        this.moveNotificationOneDayForward();
        this.props.navigation.navigate('Decks');
    };

    moveNotificationOneDayForward() {
        clearAppNotification()
            .then(setAppNotification());
    }

    render() {
        const {cards, title} = this.props;
        const {card, score, showFrontSide} = this.state;

        /** case 1: We don't have any cards */
        if (!cards || cards.length <= 0) {
            return <View style={defaultStyles.mainView}>
                <Text style={styles.bigText}>Please add cards first</Text>
                <FcButton onPress={() => this.goToAddCards(title)} buttonText={'Add cards'} />
            </View>;
        }

        /** case 2: Quiz is already done */
        if (card >= cards.length) {
            return <View style={defaultStyles.mainView}>
                <Text style={styles.bigText}>You're done! Congrats!</Text>
                <Text style={styles.score}>Final score: {score} of {cards.length} answers were correct.</Text>
                {score === cards.length && <Text style={styles.bigText}>Well done!</Text>}
                <FcButton onPress={this.restart} buttonText={'Restart Quiz'} inverted={true} />
                <FcButton onPress={this.goBack} buttonText={'Return to Deck'} />
                <FcButton onPress={this.goHome} buttonText={'Home'} inverted={true} />
            </View>;
        }

        /** default: Show quiz in the current state */
        return <View style={defaultStyles.mainView}>
            <Text style={styles.score}>Showing Card {card + 1} of {cards.length}</Text>
            {card > 0 && <Text style={styles.score}>Current score: {score} answers are correct.</Text>}
            {showFrontSide
                ? <Text style={styles.textView}><Text style={styles.mediumText}>{cards[card].question}</Text></Text>
                : <Text style={styles.textView}><Text style={styles.mediumText}>{cards[card].answer}</Text></Text>
            }
            <TouchableOpacity onPress={this.flip}>
                <Text style={showFrontSide ? styles.frontside : styles.backside}>{showFrontSide ? 'Answer' : 'Question'}</Text>
            </TouchableOpacity>
            <FcButton onPress={this.passed} buttonText={'Correct'}
                      buttonColorStyle={styles.whiteOnGreen}
                      buttonTextColorStyle={styles.buttonTextWhite} />
            <FcButton onPress={this.failed} buttonText={'Wrong'}
                      buttonColorStyle={styles.whiteOnRed}
                      buttonTextColorStyle={styles.buttonTextWhite} />
        </View>;
    }
}

const mapStateToProps = (state, {navigation}) => ({
    title: navigation.state.params.title,
    cards: state[navigation.state.params.title].cards,
} );

export default connect(mapStateToProps)(Quiz);
