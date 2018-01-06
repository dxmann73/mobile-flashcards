import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {appBackgroundColor, appTintColor} from '../styles/colors';
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
        activeTintColor: appTintColor,
        showIcon: true,
        style: {
            height: 70,
            backgroundColor: appBackgroundColor,
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
            headerTintColor: appTintColor,
            headerStyle: {
                backgroundColor: appBackgroundColor,
            }
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            headerTintColor: appTintColor,
            headerStyle: {
                backgroundColor: appBackgroundColor,
            }
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerTintColor: appTintColor,
            headerStyle: {
                backgroundColor: appBackgroundColor,
            }
        }
    }
});

export default MainNavigation;
