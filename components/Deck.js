import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import FcButton from './shared/FcButton';
import {defaultStyles} from '../styles/default';
import FcDeck from './shared/FcDeck';

class Deck extends React.Component {
    static navigationOptions = ({navigation}) => ({title: `${navigation.state.params.title}`});

    toAddCard = (title) => {
        this.props.navigation.navigate('AddCard', {title});
    };
    toQuiz = (title) => {
        this.props.navigation.navigate('Quiz', {title});
    };

    render() {
        const {title, numCards} = this.props;
        return <View style={defaultStyles.mainView}>
            <View style={styles.deckWrapper}>
                <FcDeck title={title} numCards={numCards} />
            </View>
            <FcButton onPress={() => this.toAddCard(title)} buttonText={'Add Card'} inverted={true} />
            <FcButton onPress={() => this.toQuiz(title)} buttonText={'Start quiz'} />
        </View>;
    }
}

const styles = StyleSheet.create({
    deckWrapper: {
        height: 100,
    },
});

const mapStateToProps = (state, {navigation}) => ({
    title: navigation.state.params.title,
    numCards: navigation.state.params.numCards,
    deck: state[navigation.state.params.title],
} );

export default connect(mapStateToProps)(Deck);
