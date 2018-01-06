import React from 'react';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {defaultStyles} from '../styles/default';
import FcDeck from './shared/FcDeck';

class Decks extends React.Component {

    deckPanel = ({item}) => (
        <TouchableOpacity onPress={() => this.toDeck(item)} style={styles.panelWrapper}>
            <FcDeck title={item.title} numCards={item.numCards} />
        </TouchableOpacity>);

    toDeck = ({title, numCards}) => {
        this.props.navigation.navigate('Deck', {title, numCards});
    };

    render() {
        const {decks} = this.props;
        return <View style={defaultStyles.container}>
            <FlatList
                data={decks}
                renderItem={this.deckPanel}
                keyExtractor={(item, index) => item.title} />
        </View>;
    }
}

const styles = StyleSheet.create({
    panelWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
    },
});

const mapStateToProps = (state) => {
    return {
        decks: Object.keys(state).map(title => ({title, numCards: state[title].questions.length}))
    };
};

export default connect(mapStateToProps)(Decks);
