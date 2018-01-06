import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {appHighlightInk, appDarkInk} from '../styles/colors';
import Decks from './Decks';
import AddDeck from './AddDeck';
import Deck from './Deck';
import AddCard from './AddCard';
import Quiz from './Quiz';

const Tabs = TabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => <FontAwesome name="list-alt" size={24} color={tintColor} />
        },
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add New Deck',
            tabBarIcon: ({tintColor}) => <FontAwesome name="plus-square" size={24} color={tintColor} />
        },
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: appDarkInk,
        showIcon: true,
        style: {
            height: 70,
            backgroundColor: appHighlightInk,
        }
    }
});

const MainNavigation = StackNavigator({
    Home: {
        screen: Tabs,
    },
    Deck: {
        screen: Deck,
        navigationOptions: {
            headerTintColor: appDarkInk,
            headerStyle: {
                backgroundColor: appHighlightInk,
            }
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            headerTintColor: appDarkInk,
            headerStyle: {
                backgroundColor: appHighlightInk,
            }
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerTintColor: appDarkInk,
            headerStyle: {
                backgroundColor: appHighlightInk,
            }
        }
    }
});

export default MainNavigation;
