import React from 'react';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {defaultStyles} from '../styles/default';
import FcDeck from './shared/FcDeck';
import {retrieveDecksFromStorage} from '../utils/storage';
import FcButton from './shared/FcButton';

class Decks extends React.Component {
    componentWillMount() {
        retrieveDecksFromStorage(this.props.dispatch);
    }

    deckPanel = ({item}) => (
        <TouchableOpacity onPress={() => this.toDeck(item)} style={styles.panelWrapper}>
            <FcDeck title={item.title} numCards={item.numCards} />
        </TouchableOpacity>);

    toDeck = ({title}) => {
        this.props.navigation.navigate('Deck', {title});
    };
    toAddDeck = () => {
        this.props.navigation.navigate('AddDeck');
    };

    render() {
        const {decks} = this.props;
        if (!decks.length) {
            return <View style={defaultStyles.mainView}>
                <Text style={styles.teaserText}>You should add a deck first.</Text>
                <FcButton onPress={this.toAddDeck} buttonText={'Add deck'} />
            </View>;
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
    teaserText: {
        fontSize: 20,
        marginBottom: 20,
    },
});

const mapStateToProps = (state) => {
    return {
        decks: Object.keys(state).map(title => ({title, numCards: state[title].cards.length}))
    };
};

export default connect(mapStateToProps)(Decks);
