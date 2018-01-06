import React from 'react';

import {connect} from 'react-redux';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {defaultStyles} from '../styles/default';
import {appDefaultInk, appDefaultPaper, appLightInk} from '../styles/colors';

class Decks extends React.Component {
    deckPanel = ({item}) => <TouchableOpacity onPress={() => this.toDeck(item.key)} style={styles.fullWidthPanel}>
        <Text style={styles.deckTitle}>{item.title}</Text>
        <Text style={styles.deckSubtitle}>{item.numCards} Cards</Text>
    </TouchableOpacity>;

    toDeck = (key) => {
        this.props.navigation.navigate('Deck', {key});
    };

    render() {
        const {decks} = this.props;
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

const mapStateToProps = (state) => {
    return {
        decks: Object.keys(state).map(key => ({key, title: state[key].title, numCards: state[key].questions.length}))
    };
};

export default connect(mapStateToProps)(Decks);
