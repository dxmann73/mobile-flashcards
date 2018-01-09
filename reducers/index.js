import {ADD_CARD, ADD_DECK, RECEIVE_DECKS} from '../actions/actionTypes';

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS :
            return {
                ...demoState,
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

const demoState = {
    demo: {
        title: 'demo',
        cards: [
            {
                question: 'This is a demo question',
                answer: 'I think you\'ve guessed the answer. Correct?'
            },
            {
                question: 'You should add more decks',
                answer: 'Go to the deck view'
            }
        ]
    },
};

export default decks;
