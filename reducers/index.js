import {ADD_CARD, ADD_DECK, RECEIVE_DECKS} from '../actions/actionTypes';

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS :
            return {
                ...action.decks,
            };
        case ADD_DECK :
            return {
                ...state,
                ...action.deck,
            };
        case ADD_CARD :
            let newDeck = {...state[action.deckTitle]};
            newDeck.cards = [...newDeck.cards, action.card];
            return {
                ...state,
                [action.deckTitle]: newDeck,
            };
        default :
            return state;
    }
}

export default decks;
