import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import FcButton from './shared/FcButton';
import {defaultStyles} from '../styles/default';
import FcDeck from './shared/FcDeck';

class Deck extends React.Component {
    static navigationOptions = ({navigation}) => ({title: `${navigation.state.params.title}`});

    toAddCard = () => {
        this.props.navigation.navigate(
            'AddCard',
            {deckId: 1}
        );
    };
    toQuiz = () => {
        this.props.navigation.navigate(
            'Quiz',
            {deckId: 1}
        );
    };

    render() {
        const {title, numCards} = this.props;
        return <View style={defaultStyles.mainView}>
            <View style={styles.deckWrapper}>
                <FcDeck title={title} numCards={numCards} />
            </View>
            <FcButton onPress={this.toAddCard} buttonText={'Add Card'} />
            <FcButton onPress={this.toQuiz} buttonText={'Start quiz'} inverted={true} />
        </View>;
    }
}

const styles = StyleSheet.create({
    deckWrapper: {
        height: 100,
    },
});

const mapStateToProps = (state, {navigation}) => ({
    key: navigation.state.params.key,
    title: navigation.state.params.title,
    numCards: navigation.state.params.numCards,
    deck: state[navigation.state.params.key],
} );

export default connect(mapStateToProps)(Deck);
