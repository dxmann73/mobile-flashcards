import {ADD_CARD, ADD_DECK, GET_DECKS} from '../actions';

function decks(state = initialState, action) {
    switch (action.type) {
        case GET_DECKS :
            return {
                ...state,
                ...action.decks,
            };
        case ADD_DECK :
            return {
                ...state,
                ...action.deck
            };
        case ADD_CARD :
            let newDeck = {...state[action.deck.key]};
            newDeck.questions = [...newDeck.questions, action.card];
            return {
                ...state,
                [action.deck.key]: newDeck
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

export default decks;