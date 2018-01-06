import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {defaultStyles} from '../styles/default';
import {appDefaultPaper, appGreen, appRed, appWhite} from '../styles/colors';
import FcButton from './shared/FcButton';

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
    restart = () => {
        this.setState(defaultState);
    };
    goBack = () => {
        this.props.navigation.navigate('Home');
    };
    goToAddCards = (title) => {
        this.props.navigation.navigate('AddCard', {title});
    };

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
                <FcButton onPress={this.restart} buttonText={'Start over'} inverted={true} />
                <FcButton onPress={this.goBack} buttonText={'Done'} />
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

const styles = StyleSheet.create({
    textView: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appDefaultPaper,
    },
    mediumText: {
        fontSize: 28,
        marginBottom: 10,
    },
    bigText: {
        fontSize: 30,
        marginBottom: 20,
    },
    score: {
        fontSize: 16,
        marginBottom: 10,
    },
    frontside: {
        fontSize: 16,
        fontWeight: 'bold',
        color: appGreen,
    },
    backside: {
        fontSize: 16,
        fontWeight: 'bold',
        color: appRed,
    },
    whiteOnGreen: {
        backgroundColor: appGreen,
        borderColor: appWhite,
    },
    buttonTextWhite: {
        color: appWhite,
    },
    whiteOnRed: {
        backgroundColor: appRed,
        borderColor: appWhite,
        borderWidth: 3,
    },
});

const mapStateToProps = (state, {navigation}) => ({
    title: navigation.state.params.title,
    cards: state[navigation.state.params.title].cards,
} );

export default connect(mapStateToProps)(Quiz);
