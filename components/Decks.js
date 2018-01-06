import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {defaultStyles} from '../styles/default';
import {appDefaultInk, appDefaultPaper, appLightInk} from '../styles/colors';

class Decks extends React.Component {
    deckPanel = ({item}) => <TouchableOpacity onPress={() => this.toDeck(item)} style={styles.fullWidthPanel}>
        <Text style={styles.deckTitle}>{item.title}</Text>
        <Text style={styles.deckSubtitle}>{item.numCards} Cards</Text>
    </TouchableOpacity>;

    toDeck = (deck) => {
        this.props.navigation.navigate('Deck', {deck});
    };

    render() {
        const decks = Object.keys(tmpState).map(key => ({key, title: tmpState[key].title, numCards: tmpState[key].questions.length}));
        return <View style={defaultStyles.container}>
            <FlatList data={decks} renderItem={this.deckPanel} />
        </View>;
    }
}

const styles = StyleSheet.create({
    fullWidthPanel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        backgroundColor: appDefaultPaper,
        paddingTop: 30,
        paddingBottom: 30,
    },
    deckTitle: {
        fontSize: 28,
        color: appDefaultInk,
    },
    deckSubtitle: {
        fontSize: 24,
        color: appLightInk,
    },
});

const tmpState = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    StarCitizen: {
        title: 'Star Citizen',
        questions: [
            {
                question: 'When will 3.0 go live?',
                answer: 'Not before 2022'
            },
            {
                question: 'What needs to be done every tuesday',
                answer: 'GIB ATV'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    EmptyArray: {
        title: 'Empty Array',
        questions: [
        ]
    },
    EmptyObject: {
        title: 'Empty Object',
        questions: [
            {
            }
        ]
    }
};

export default Decks;
