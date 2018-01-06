import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {defaultStyles} from '../styles/default';
import {appGreen, appRed, appWhite, green, white} from '../styles/colors';
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

        if (!cards || cards.length <= 0) {
            return <View style={defaultStyles.mainView}>
                <Text>You need to add cards first.</Text>
                <FcButton onPress={() => this.goToAddCards(title)} buttonText={'Add cards'} />
            </View>;
        }

        if (card >= cards.length) {
            return <View style={defaultStyles.mainView}>
                <Text>You're done!</Text>
                <Text>Final score: {score}/{cards.length}</Text>
                <FcButton onPress={this.restart} buttonText={'Start over'} inverted={true} />
                <FcButton onPress={this.goBack} buttonText={'Done'} />
            </View>;
        }

        return <View style={defaultStyles.mainView}>
            <Text>Showing Card {card + 1}/{cards.length}</Text>
            <Text>Current score: {score}/{cards.length}</Text>
            {showFrontSide
                ? <Text>{cards[card].question}</Text>
                : <Text>{cards[card].answer}</Text>
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
    frontside: {
        color: appGreen,
    },
    backside: {
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
    cards: state[navigation.state.params.title].questions,
} );

export default connect(mapStateToProps)(Quiz);
