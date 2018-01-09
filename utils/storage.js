import React from 'react';
import {AsyncStorage} from 'react-native';
import {addCard, addDeck, receiveDecks} from '../actions/index';

const storage_key = 'mobile-flashcards.decks';
const NO_DATA = {};

/** Retrieves all decks from storage or empty object */
export const retrieveDecksFromStorage = (dispatch) =>
    getDecksFromStorage()
        .then(decks => dispatch(receiveDecks(decks)));

/** Creates new deck and adds it to the decks currently in storage */
export const addDeckToStorage = (dispatch, title) => {
    const newDeck = {[title]: {title, cards: []}};
    return getDecksFromStorage()
        .then(decks => ({...decks, ...newDeck}))
        .then(modifiedDecks => AsyncStorage.setItem(storage_key, JSON.stringify(modifiedDecks)))
        .then(() => dispatch(addDeck(newDeck)));
};

/** Adds a card to a currently existing deck */
export const addCardToStorage = (dispatch, title, card) =>
    getDecksFromStorage()
        .then(decks => {
            const modifiedDeck = {[title]: {title, cards: [...decks[title].cards, card]}};
            return {...decks, ...modifiedDeck};
        })
        .then(modifiedDecks => AsyncStorage.setItem(storage_key, JSON.stringify(modifiedDecks)))
        .then(() => dispatch(addCard(title, card)));

/** @return a Promise which will eventually return the decks or {} if empty */
const getDecksFromStorage = () =>
    AsyncStorage.getItem(storage_key)
        .then(JSON.parse)
        .then(data => data || NO_DATA);
