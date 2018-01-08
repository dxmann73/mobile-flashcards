import React from 'react';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {defaultStyles} from '../styles/default';
import FcDeck from './shared/FcDeck';
import {AppLoading} from 'expo';
import {retrieveDecksFromStorage} from '../utils/storage';

class Decks extends React.Component {
    componentWillMount() {
        retrieveDecksFromStorage(this.props.dispatch);
    }

    deckPanel = ({item}) => (
        <TouchableOpacity onPress={() => this.toDeck(item)} style={styles.panelWrapper}>
            <FcDeck title={item.title} numCards={item.numCards} />
        </TouchableOpacity>);

    toDeck = ({title, numCards}) => {
        this.props.navigation.navigate('Deck', {title, numCards});
    };

    render() {
        const {decks} = this.props;
        if (!decks) {
            return <AppLoading />;
        }

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
        decks: Object.keys(state).map(title => ({title, numCards: state[title].cards.length}))
    };
};

export default connect(mapStateToProps)(Decks);
