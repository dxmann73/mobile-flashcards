export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export function receiveDecks(decks) {
    // TODO initial state: Storage empty, or do we provide a "demo" deck?
    return {
        type: RECEIVE_DECKS,
        decks,
    };
}

export function addDeck(title) {
    const deck = {[title]: {title, cards: []}};
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