import {ADD_CARD, ADD_DECK, RECEIVE_DECKS} from '../actions';

function decks(state = initialState, action) {
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
            newDeck.questions = [...newDeck.questions, action.card];
            return {
                ...state,
                [action.deckTitle]: newDeck,
            };
        default :
            return state;
    }
}

const initialState = {
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
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
};

export default decks;