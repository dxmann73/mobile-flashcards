import {ADD_CARD, ADD_DECK, RECEIVE_DECKS} from './actionTypes';

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    };
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    };
}

export function addCard(deckTitle, card) {
    return {
        type: ADD_CARD,
        deckTitle,
        card,
    };
}